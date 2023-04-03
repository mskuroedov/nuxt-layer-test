<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
  options: {
    required: true,
    default: () => []
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

function handleSelect(event: Event) {
  const {target} = event
  if (target) emit('update:modelValue', (target as HTMLInputElement).value);
}
</script>

<template>
  <select
    class="ui-select"
    :value="modelValue"
    @change="handleSelect"
  >
    <option
      v-for="(option,i) in options"
      :key="i"
      :selected="i === 0"
      :value="option.val"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.ui-select {
  @apply block w-full p-2.5 bg-block
  border-2 border-borderColor text-textColor rounded
  focus:outline-none appearance-none;

  // custom arrow on default select
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23c1d1df' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
}
</style>
