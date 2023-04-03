<script lang="ts" setup>
import {MaskaDetail, vMaska} from "maska"
import {useVuelidate} from "@vuelidate/core";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const inputGrz = ref<HTMLInputElement | null>(null)
const inputRegion = ref<HTMLInputElement | null>(null)
const inputGrzValue = ref(props.modelValue?.substring(0, 6) || '')
const inputRegionValue = ref(props.modelValue?.substring(6, 3) || '')
const fullGrz = computed(() => props.modelValue)
const v$ = useVuelidate({
  validLicensePlate: (val: string) => {
    const allowChars = 'АВЕКМНОРСТУХавекмнорстухABEKMHOPCTYXabekmhopctyx'
    return new RegExp(`([${allowChars}]\\d{3}[${allowChars}]{2}(\\d\\d|\\d\\d\\d))`).test(val)
  }
  //@ts-ignore
}, fullGrz)

const license_plate_options = {
  mask: "A ### AA",
  tokens: {
    A: {
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
  },
  onMaska: (event: MaskaDetail) => {
    const {completed} = event
    if (completed && inputRegion.value) {
      inputRegion.value.focus()
    }
  }
}

function handlePaste(e: ClipboardEvent) {
  const pastedText: string | undefined = e.clipboardData?.getData('Text')
  if (!pastedText) return

  if (pastedText.length > 6) {
    inputRegionValue.value = pastedText.substring(6)
  }
}

const handleRegionErase = (newVal: string, prevVal: string) => {
  if (!!prevVal && !newVal) { // if value erased
    return inputGrz.value && inputGrz.value.focus()
  }
}

watch(inputRegionValue, handleRegionErase)

watch([inputGrzValue, inputRegionValue], () => {
  const fullGrz = `${inputGrzValue.value}${inputRegionValue.value}`.replace(/\s/g, '')
  emit('update:modelValue', fullGrz)
})
</script>

<template>
  <div class="grid grid-cols-3 input-grz">
    <div class="col-span-3 mb-2">
      <label
        for="grz"
        class="font-bold text-base cursor-pointer"
      >
        Введите номер автомобиля:
      </label>
    </div>

    <input
      id="grz"
      ref="inputGrz"
      v-model="inputGrzValue"
      v-maska:[license_plate_options]
      type="text"
      class="col-span-2"
      :class="{'invalid':v$.$error}"
      placeholder="А 000 АА"
      @paste="handlePaste"
    >
    <input
      ref="inputRegion"
      v-model="inputRegionValue"
      v-maska
      data-maska="['###','##']"
      type="text"
      class="col-span-1"
      :class="{'invalid':v$.$error}"
      placeholder="777"
    >
  </div>
</template>
<style>
.input-grz {
  input {
    @apply h-[47px] border-2 border-borderColor w-full text-black z-0 p-3 font-bold placeholder:font-bold;

    &:first-of-type {
      @apply rounded-l-lg;
    }

    &:last-of-type {
      @apply rounded-r-lg;
    }

    + input {
      @apply -ml-[2px]
    }

    &:focus {
      @apply border-borderColor-focus outline-none z-10;
    }

    &.invalid{
      @apply border-danger placeholder:text-danger placeholder:opacity-70;
    }
  }
}
</style>
