// @ts-ignore
import {SearchTypeGibdd} from "types/searchGibdd";
import {SPUIInput, SPUIInputLicensePlate} from "#components";

export const useSearchGibdd = () => {
  const searchType = ref<SearchTypeGibdd>(SearchTypeGibdd.LICENSE_PLATE)
  const gibddSearchTypes = [
    {label: 'По номеру автомобиля', val: SearchTypeGibdd.LICENSE_PLATE},
    {label: 'По свидетельству о регистрации', val: SearchTypeGibdd.CTC},
    {label: 'По водительскому удостоверению', val: SearchTypeGibdd.VU},
    {label: 'По номеру постановления', val: SearchTypeGibdd.UIN}
  ]

  function setSearchType(type: SearchTypeGibdd) {
    searchType.value = type
  }

  const formInput = computed(() => {
    switch (searchType.value) {
      case SearchTypeGibdd.CTC:
        return {
          component: SPUIInput,
          props: {
            name: SearchTypeGibdd.CTC,
            rules: SearchTypeGibdd.CTC,
            maska: SearchTypeGibdd.CTC,
            tip: 'Введите номер СТС:',
            placeholder: '00АА000000',
            label: 'Введите номер СТС:'
          }
        }
      case SearchTypeGibdd.VU:
        return {
          component: SPUIInput,
          props: {
            name: SearchTypeGibdd.VU,
            rules: SearchTypeGibdd.VU,
            maska: SearchTypeGibdd.VU,
            tip: 'Введите номер ВУ:',
            label: 'Введите номер ВУ:',
            placeholder: '00АА000000',
          }
        }
      case SearchTypeGibdd.UIN:
        return {
          component: SPUIInput,
          props: {
            name: SearchTypeGibdd.UIN,
            rules: SearchTypeGibdd.UIN,
            maska: SearchTypeGibdd.UIN,
            tip: 'Введите номер постановления:',
            placeholder: '00000000000000000000',
            label: 'Введите номер постановления:',
          }
        }
      default:
        return {
          component: SPUIInputLicensePlate,
          props: {}
        }
    }
  })
  return {
    searchType,
    gibddSearchTypes,
    formInput,
    setSearchType
  }
}
