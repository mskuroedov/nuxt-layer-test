<template>
  <div class="min-h-screen">
    <SPTheHeader class="py-[15px]">
      <template #logo>
        <span class="flex items-center gap-[10px] pl-[10px]">
          <span class="ml-[10px] hidden md:inline text-2xl">погаситьштраф.рф</span>
        </span>
      </template>
    </SPTheHeader>
    <div class="pt-8 pb-8">
      <slot/>
    </div>
  </div>
</template>
