<script lang="ts" setup>
const {userState} = useUser()
const {logout} = useAuth()
const emailConfirmed = computed(() => {
  return userState().value?.email_confirmed || false
})
const emailToConfirm = ref('')
const emailSent = ref(false)
const waitEmailConfirm = (email: string) => {
  emailToConfirm.value = email
  emailSent.value = true
}
const backEditEmail = () => {
  emailSent.value = false
}
</script>

<template>
  <div
    v-if="emailConfirmed"
    class="flex items-center gap-2 text-base"
  >
    {{ userState().value.email }}
    <Icon
      class="cursor-pointer hover:text-primary-hover"
      name="tabler:logout"
      size="24"
      @click="logout"
    />
  </div>
  <template v-else>
    <SPUserDropdownMenuAuthLogin
      v-if="!emailSent"
      @email-sent="waitEmailConfirm"
    />
    <SPUserDropdownMenuAuthConfirm
      v-else
      :email="emailToConfirm"
      @edit-email="backEditEmail"
    />
  </template>
</template>
