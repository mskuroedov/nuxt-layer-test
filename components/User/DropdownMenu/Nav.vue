<script lang="ts" setup>
</script>

<template>
  <div class="flex gap-2 flex-col text-base -ml-1">
    <NuxtLink
      v-close-popper
      to="/payment-history"
      class="flex items-center gap-2 hover:text-primary-hover"
    >
      <Icon
        name="ic:twotone-history"
        class="flex-none"
        size="14"
      />
      История оплат
    </NuxtLink>
    <NuxtLink
      v-close-popper
      to="/profile"
      class="flex items-center gap-2 hover:text-primary-hover"
    >
      <Icon
        name="mdi:tick-circle-outline"
        class="flex-none"
        lise="14"
      />
      Реквизиты для проверки
    </NuxtLink>
    <a
      v-close-popper
      href=""
      class="flex items-center gap-2 hover:text-primary-hover"
      @click.prevent="()=>{}"
    >
      <Icon
        class="text-danger flex-none"
        name="material-symbols:notifications-off"
        size="14"
      />
      Уведомления о задолженностях не подключены
    </a>
    <NuxtLink
      v-close-popper
      to="/saved-cards"
      class="flex items-center gap-2 hover:text-primary-hover"
    >
      <Icon
        class="flex-none"
        name="material-symbols:credit-card-outline"
        lise="14"
      />
      Сохраненные карты
    </NuxtLink>
  </div>
</template>
