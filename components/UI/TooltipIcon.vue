<script lang="ts" setup>
defineProps({
  tip: {
    type: String,
    default: ''
  },
  triggers: {
    type: Array,
    default: () => ['click']
  }
})
</script>

<template>
  <svg
    v-tooltip="{
      content: tip,
      triggers,
    }"
    class="inline outline-none"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path
      fill="#0669B8"
      d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z"
      opacity=".3"
    />
    <path
      fill="#0669B8"
      d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
</template>
