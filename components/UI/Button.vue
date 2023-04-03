<script lang="ts" setup>
// for styles references look in tailwind.scss
defineProps({
  theme: {
    type: String,
    default: 'primary',
    validator: (val: string) => ['primary', 'primary-outline',].includes(val)
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
    validator: (val: string) => ['sm', '', ''].includes(val)
  },
  loading: {
    type: Boolean,
  }
})
</script>

<template>
  <button
    class="button"
    :class="[theme,size]"
    type="submit"
    :disabled="disabled || loading"
  >
    <slot v-if="!loading" />
    <Icon
      v-else
      class="animate-spin absolute inset-0 m-auto"
      name="la:spinner"
      size="28"
    />
  </button>
</template>
