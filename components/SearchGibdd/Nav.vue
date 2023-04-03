<script lang="ts" setup>
const emit = defineEmits(['change'])
const {searchType, gibddSearchTypes, setSearchType} = useSearchGibdd()
watch(searchType, (newVal) => {
  emit('change', newVal);
})
</script>

<template>
  <div>
    <div class="lg:hidden mb-3">
      <SPUISelect
        :options="gibddSearchTypes"
        :model-value="searchType"
        @update:modelValue="setSearchType"
      />
    </div>
    <div class="nav-items-row">
      <a
        v-for="(item,index) in gibddSearchTypes"
        :key="index"
        class="nav-item"
        :class="{ active: searchType === item.val }"
        @click.prevent="setSearchType(item.val)"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-items-row {
  @apply hidden lg:flex flex-col justify-between items-stretch gap-3 pr-3 text-base relative z-10;
}

.nav-item {
  @apply border-2 border-block bg-block py-[9.1px] pl-3 rounded font-bold cursor-pointer
  text-xs lg:text-base;
  color: #768997;

  &:before,
  &:after {
    @apply hidden
    bg-appBg border-borderColor border-r-2;
    content: '';
    position: absolute;
    right: 0;
    height: 10px;
    width: 10px;
  }

  &:before {
    @apply border-b-2  rounded-br;
    top: 0;
    transform: translateY(-100%);
  }

  &:after {
    @apply border-t-2 rounded-tr;
    bottom: 0;
    transform: translateY(100%);
  }

  &.active {
    @apply relative
    text-textColor -mr-3
    border-borderColor rounded-none rounded-l border-r-0;

    &:before,
    &:after {
      @apply block;
    }

    &:first-of-type {
      &:before {
        @apply hidden
      }
    }

    &:last-of-type {
      &:after {
        @apply hidden
      }
    }
  }
}
</style>
