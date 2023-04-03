<script lang="ts" setup>
const showMenu = ref(false)
const {notificationsCount, notificationsLoading} = useUserNotifications()
</script>

<template>
  <div class="relative">
    <VDropdown
      :triggers="['click']"
      :placement="'bottom-end'"
      :distance="19"
      :show="showMenu"
      :hide-triggers="['click']"
      :auto-hide="true"
    >
      <button
        class="relative -m-3 p-3"
      >
        <span
          class="relative"
        >
          <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
            <span
              v-if="notificationsLoading"
              class="flex items-center justify-center bg-white rounded-full text-primary p-[2px]"
            >
              <Icon
                name="icomoon-free:spinner8"
                class="animate-spin"
                size="12"
              />
            </span>
            <span
              v-else-if="notificationsCount"
              class="animate-jump min-w-[20px] py-[2px] px-[2px] text-xs text-center font-bold bg-danger rounded-full"
            >
              {{ notificationsCount }}
            </span>
          </span>
          <span>
            <Icon
              name="mdi:user-circle"
              size="30"
            />
          </span>
        </span>
      </button>
      <template #popper>
        <SPUserDropdownMenu />
      </template>
    </VDropdown>
  </div>
</template>
