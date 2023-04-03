<script lang="ts" setup>
import {vMaska} from "maska"
import {useVuelidate} from "@vuelidate/core";
import {email, helpers, required} from "@vuelidate/validators";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  tip: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false
  },
  maska: {
    type: String,
    default: ''
  },
  rules: {
    type: String,
    default: ''
  },
  hideErrorMessages: {
    type: Boolean,
    default: false
  }
})
const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val);
  }
})
const MASKA_TOKENS = {
  L: {
    pattern: /[АВЕКМНОРСТУХавекмнорстухFDTRVYJHCNEftdtrvyjhcne/[]/,
    transform: (v: string) => {
      const engLetters = 'FDTRVYJHCNEftdtrvyjhcne['
      const translations: { [key: string]: string } = {
        F: 'А',
        D: 'В',
        T: 'Е',
        R: 'К',
        V: 'М',
        Y: 'Н',
        J: 'О',
        H: 'Р',
        C: 'С',
        N: 'Т',
        E: 'У',
        '[': 'Х',
        '{': 'Х'
      }
      if (engLetters.includes(v)) {
        return translations[v.toLocaleUpperCase()]
      }
      return v.toLocaleUpperCase()
    }
  }

}
const MASKA_OPTIONS = {
  ctc: {
    mask: "##LL######",
    tokens: MASKA_TOKENS
  },
  license_plate: {
    mask: "L ### LL",
    tokens: MASKA_TOKENS
  },
  uin: {
    mask: '#########################'
  },
  vu: {
    mask: "##LL######",
    tokens: MASKA_TOKENS
  }
}
const maskOptions = computed(() => {
  if (Object.keys(MASKA_OPTIONS).includes(props.maska as string)) {
    // @ts-ignore
    return MASKA_OPTIONS[props.maska]
  }
  return {}

})

const VUELIDATION_RULES = {
  email: {
    required: helpers.withMessage('Поле обязательно', required),
    email: helpers.withMessage('Неверный адрес электронной почты', email)
  },
  ctc: {
    required,
    validData(val: string) {
      return /^[0-9]{2}(?:[0-9]{2}|[а-яА-Яa-zA-Z]{2})[0-9]{6}$/.test(val)
    }
  },
  license_plate: {
    required,
  },
  uin: {
    required,
  },
  vu: {
    required,
    validData(val: string) {
      return /^[0-9]{2}(?:[0-9]{2}|[а-яА-Яa-zA-Z]{2})[0-9]{6}$/.test(val)
    }
  }
}
const validationRules = computed(() => {
  if (Object.keys(VUELIDATION_RULES).includes(props.rules as string)) {
    // @ts-ignore
    return VUELIDATION_RULES[props.rules]
  }
  return {}
})
const v$ = useVuelidate(validationRules.value, value)
</script>

<template>
  <div class="relative">
    <div class="mb-2">
      <label
        v-if="label"
        :for="id"
        class="font-bold text-base cursor-pointer"
      >
        {{ label }}
      </label>
      <SPUITooltipIcon
        v-if="tip"
        class="align-sub ml-1"
        :tip="tip"
      />
    </div>
    <input
      :id="id"
      v-model="value"
      v-maska:[maskOptions]
      :type="type"
      v-bind="$attrs"
      class="h-[47px] w-full p-3 text-black rounded-lg border-2 border-borderColor focus:border-borderColor-focus outline-none placeholder:font-bold"
      :class="{
        '!border-danger placeholder:text-danger placeholder:opacity-70':v$.$error
      }"
    >
    <div
      v-if="v$.$errors.length && !hideErrorMessages"
      class="text-danger text-base"
    >
      <div
        v-for="(error,i) in v$.$errors"
        :key="i"
      >
        {{ error.$message }}
      </div>
    </div>
  </div>
</template>
