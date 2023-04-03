<script lang="ts" setup>
import {getMailServiceDomain} from "utils/getMailServiceDomain";

const props = defineProps({
  email: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['editEmail'])
const {sendVerifyEmail} = useUser()
const sendIsSending = ref(false)
const userEmail = ref('')
const mailService = computed(() => getMailServiceDomain(userEmail.value) || '')
const navigateToMailService = () => {
  window.location.href = mailService.value.url
}
const resendEmail = async () => {
  try {
    sendIsSending.value = true
    await sendVerifyEmail(userEmail.value)
    startTimer()
  } catch (err) {
    console.error(err)
  } finally {
    sendIsSending.value = false
  }

}
const countDownVal = ref(0)
const startTimer = (sec = 60) => {
  countDownVal.value = sec
  const timer = setInterval(() => {
    countDownVal.value--
  }, 1000)
  setTimeout(() => {
    clearInterval(timer);
  }, 1000 * sec)
}

onMounted(() => {
  userEmail.value = props.email
  startTimer()
})
</script>

<template>
  <div>
    <div class="grid sm:grid-cols-12 gap-3 items-center">
      <div class="sm:col-span-7">
        <div class="flex items-center gap-4">
          <img
            src="/auth/email-illustration.svg"
            alt="email-logo"
            width="40"
            height="40"
          >
          <div class="flex flex-col max-w-full overflow-hidden">
            <div
              class="flex shrink-0 items-center gap-1
                     text-textColor-title font-bold"
            >
              <span class="block truncate mb-1">
                {{ email }}
              </span>
              <Icon
                class="cursor-pointer -mt-1 hover:text-primary-hover"
                name="material-symbols:edit"
                size="20"
                @click="emit('editEmail')"
              />
            </div>
            <div class="text-base text-danger">
              Ожидает подтверждения
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="mailService"
        class="sm:col-span-5 "
      >
        <SPUIButton
          class="w-full"
          theme="primary-outline"
          @click="navigateToMailService"
        >
          Перейти на {{ mailService.domain }}
        </SPUIButton>
        <a
          class="text-xs text-primary hover:text-primary-hover cursor-pointer"
          :class="{'text-textColor pointer-events-none':countDownVal}"
          @click="resendEmail"
        >
          Отправить повторно <span v-if="countDownVal">({{ countDownVal }} сек.)</span>
        </a>
      </div>
    </div>
    <div class="text-base">
      На почту отправлено письмо с ссылкой для подтверждения
    </div>
  </div>
</template>
