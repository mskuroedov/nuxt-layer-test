<script setup lang="ts">
const {initAuth} = useAuth();
onMounted(() => {
  nextTick(async () => {
    await initAuth()
  })
})
</script>
<template>
  <div class="bg-appBg">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
