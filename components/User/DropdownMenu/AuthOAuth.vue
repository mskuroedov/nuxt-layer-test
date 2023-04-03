<script lang="ts" setup>
const config = useRuntimeConfig()
const router = useRouter()
const {useToken} = useAuth()

const redirectOAuthLink = window.location.origin + router.currentRoute.value.fullPath
const oAuthLink = (provider: string) => {
  window.location.href = `${config.public.API_BASE_URL}user/auth/${provider}?access-token=${useToken().value}&redirect_to=${redirectOAuthLink}`
}

</script>

<template>
  <div class="flex flex-col gap-2">
    <SPUIButton
      theme="primary-outline"
      class="btn-oauth"
      @click="oAuthLink('yandex')"
    >
      <img
        class="h-[75%] absolute top-1.5 left-1.5"
        src="/auth/yandex.png"
        alt="yandex logo"
      >
      Войти через
      <span class="ya-oauth-text">
        <span>Я</span><span>ндкес</span>
      </span>
    </SPUIButton>
    <SPUIButton
      theme="primary-outline"
      class="btn-oauth"
      @click="oAuthLink('google')"
    >
      <img
        class="h-[75%] absolute top-1.5 left-1.5"
        src="/auth/google.png"
        alt="google logo"
      >
      Войти через
      <span class="google-oauth-text">
        <span>G</span>
        <span>o</span>
        <span>o</span>
        <span>g</span>
        <span>l</span>
        <span>e</span>
      </span>
    </SPUIButton>
    <SPUIButton
      theme="primary-outline"
      class="btn-oauth"
      @click="oAuthLink('mail')"
    >
      <img
        class="h-[75%] absolute top-1.5 left-1.5"
        src="/auth/mail.png"
        alt="mail logo"
      >
      Войти через
      <span class="main-oauth-text">
        <span>Mail</span><span>.ru</span>
      </span>
    </SPUIButton>
    <p class="text-base">
      Используется для восстановления доступа к истории оплат и проверок
      в случае обновления браузера или устройства
    </p>
  </div>
</template>
<style lang="scss" scoped>
.btn-oauth {
  @apply text-2xl relative font-normal py-2;
  >span{
    @apply ml-1;
  }
  &:hover {
    * {
      color: white !important;
    }
  }
}

.ya-oauth-text {
  color: black;

  span:first-of-type {
    font-weight: 600;
    color: #db4437
  }
}

.google-oauth-text {
  span:nth-of-type(1),
  span:nth-of-type(4) {
    font-weight: 600;
    color: #4285f4;
  }

  span:nth-of-type(2),
  span:nth-of-type(6) {
    font-weight: 600;
    color: #db4437
  }

  span:nth-of-type(3) {
    color: #f4b400;
  }

  span:nth-of-type(5) {
    color: #0f9d58;
  }
}

.main-oauth-text {
  span:nth-of-type(1) {
    font-weight: 600;
    color: #0061f8;
  }

  span:nth-of-type(2) {
    color: #f4b400;
  }
}
</style>
