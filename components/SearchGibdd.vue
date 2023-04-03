<script setup lang="ts">
import {SearchTypeGibdd} from "types/searchGibdd";
import {useVuelidate} from "@vuelidate/core";

const {searchType, setSearchType, formInput} = useSearchGibdd()
const {userHasNoEmail, updateUser} = useUser()
const document_value = ref('')
const userEmail = ref('')

const formComputedClasses = computed<{ [key: string]: string }>(() => {
  if (userHasNoEmail.value) {
    return {
      formContainerClasses: 'lg:col-span-9',
      formGridClasses: '',
      text: 'w-2/3'
    }
  } else {
    return {
      formContainerClasses: 'lg:col-span-6',
      formGridClasses: '',
      text: ''
    }
  }
})
const formTip = computed(() => {
  switch (searchType.value) {
    case SearchTypeGibdd.LICENSE_PLATE:
      return 'Поиск выполняется по официальной базе ГИБДД. Оплатить штраф можно любой картой. Чтобы всегда быть в курсе, подпишитесь на уведомления и мы сразу же сообщим вам о новых штрафах по номеру автомобиля.';
    case SearchTypeGibdd.CTC:
      return 'Поиск выполняется по официальной базе ГИБДД. Оплатить штраф можно любой картой. Чтобы всегда быть в курсе, подпишитесь на уведомления и мы сразу же сообщим вам о новых штрафах по автомобилю.';
    case SearchTypeGibdd.VU:
      return 'Поиск выполняется по официальной базе ГИБДД. Оплатить штраф можно любой картой. Чтобы всегда быть в курсе, подпишитесь на уведомления и мы сразу же сообщим вам о новых штрафах по водителю.'
    case SearchTypeGibdd.UIN:
      return 'Поиск выполняется по официальной базе ГИБДД. Оплатить штраф можно любой картой. Чтобы всегда быть в курсе, подпишитесь на уведомления и мы сразу же сообщим вам о новых штрафах по водителю или автомобилю.';
    default:
      return ''
  }
})

function handleChangeFormType(searchType: SearchTypeGibdd) {
  v$.value.$reset()
  setSearchType(searchType)
}

const v$ = useVuelidate()
const submit = async () => {
  await v$.value.$validate();
  console.log(v$.value)
  if (!v$.value.$error) {
    try {
      if (userHasNoEmail) {
        //todo path user with email
        // await updateUser()
      }
      //todo go to search?
      //navigateTo('/search/gibdd',query:{searchValues})
      //search/gibdd?document_type=ctc&document_value=77УС813240&additional_fields%5Blicence_plate%5D=
    } catch (err) {

    } finally {

    }
  }
}

</script>

<template>
  <div class="grid grid-cols-12 my-4">
    <div class="col-span-12 lg:col-span-3 lg:-mr-[2px]">
      <SPSearchGibddNav @change="handleChangeFormType" />
    </div>
    <div
      class="col-span-12"
      :class="formComputedClasses.formContainerClasses"
    >
      <div class="p-4 lg:p-6 bg-block border-2 border-borderColor rounded">
        <form
          class="flex flex-col flex-wrap gap-2
                 md:flex-row md:items-end"
          @submit.prevent="submit"
        >
          <Component
            :is="formInput.component"
            v-bind="formInput.props"
            v-model="document_value"
            hide-error-messages
            class="flex-1"
          />
          <SPUIInput
            v-if="userHasNoEmail"
            v-model="userEmail"
            class="flex-1"
            name="email"
            rules="email"
            label="Электронная почта:"
            placeholder="ваша-почта@yandex.ru"
          />
          <SPUIButton class="md:w-1/3">
            Проверить
          </SPUIButton>
          <div class="w-full">
            <p
              class="text-xs flex-none text-textColor-secondary py-2"
              :class="formComputedClasses.text"
            >
              {{ formTip }}
            </p>

            <template v-if="v$.$error">
              <div
                v-if="searchType === SearchTypeGibdd.LICENSE_PLATE"
                class="error-msg"
              >
                <div>Проверьте правильность заполнения поля:</div>
                <div>Формат гос. номеров: <span>A 000 AA 000</span> <span>A 000 AA 00</span></div>
                <div>Используйте цифры <span>0-9</span> и буквы <span>А, В, Е, К, М, Н, О, Р, С, Т, У, Х</span></div>
              </div>
              <div
                v-if="searchType === SearchTypeGibdd.CTC"
                class="error-msg"
              >
                <div>Проверьте правильность заполнения поля:</div>
                <div>Формат свидетельства о регистрации ТС: <span>00 АА 000000</span> <span>00 00 000000</span></div>
                <div>Используйте цифры <span>0-9</span> и буквы <span>А, В, Е, К, М, Н, О, Р, С, Т, У, Х</span></div>
              </div>
              <div
                v-if="searchType === SearchTypeGibdd.VU"
                class="error-msg"
              >
                <div>Проверьте правильность заполнения поля:</div>
                <div>Формат водительского удостоверения: <span>00 АА 000000</span> <span>00 00 000000</span></div>
                <div>Используйте цифры <span>0-9</span> и буквы <span>А, В, Е, К, М, Н, О, Р, С, Т, У, Х</span></div>
              </div>
              <div
                v-if="searchType === SearchTypeGibdd.UIN"
                class="error-msg"
              >
                <div>Проверьте правильность заполнения поля: минимум 20 цифр</div>
                <div>Формат УИН: <span>00000000000000000000</span></div>
              </div>
            </template>
          </div>
        </form>
      </div>
    </div>
    <SPSearchGibddFeatures :class="{'lg:hidden':userHasNoEmail}" />
  </div>
</template>
<style lang="scss">
.error-msg {
  @apply text-error text-base flex flex-col gap-1;

  span {
    @apply border border-borderColor bg-appBg font-bold rounded p-[3px] leading-relaxed;
  }
}
</style>
