<script lang="ts" setup>
import {useVuelidate} from '@vuelidate/core'

const emit = defineEmits(['email-sent'])
const {initAuth} = useAuth()
const {userState, sendVerifyEmail} = useUser()
const v$ = useVuelidate()
const authForm = reactive({
  email: userState().value?.email || '',
  loading: false
})
const submitForm = async () => {
  await v$.value.$validate();
  if (!v$.value.$error) {
    try {
      authForm.loading = true
      const {data: res, error} = await sendVerifyEmail(authForm.email);
      if (error.value) {
        console.error(error.value)
      }
      if (res.value) {
        await initAuth();
        emit('email-sent', authForm.email)
      }
    } catch (err) {
      console.error(err)
    } finally {
      authForm.loading = false
    }
  }
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <form
      class="grid md:grid-cols-7 gap-2"
      @submit.prevent="submitForm"
    >
      <div class="md:col-span-4">
        <SPUIInput
          v-model="authForm.email"
          name="email"
          maska="email"
          rules="email"
          class="md:col-span-4"
          label="Адрес электронной почты"
          placeholder="example@mail.com"
        />
      </div>
      <SPUIButton
        class="md:mt-8 md:col-span-3"
        :loading="authForm.loading"
      >
        Подтвердить
      </SPUIButton>
    </form>
    <SPUserDropdownMenuAuthOAuth />
  </div>
</template>
