<script lang="ts" setup>
const {notificationsCount, useNotifications, notificationsLoading} = useUserNotifications()
const notificationsList = useNotifications()
const openList = ref(false)

onMounted(() => {
  openList.value = !!notificationsCount.value
})
watch(notificationsLoading,(loading)=>{
  if(!loading){
    openList.value = !!notificationsCount.value
  }
})
</script>

<template>
  <div class="">
    <div
      class="flex items-center justify-between text-base cursor-pointer pb-2"
      @click="openList = !openList"
    >
      <div>
        Уведомления <span class="text-danger">{{ notificationsCount || 0 }}</span>
      </div>
      <Icon
        :name="openList ? 'mdi:chevron-up' : 'mdi:chevron-down'"
        size="20"
        class="ml-auto"
      />
    </div>
    <div class="-mx-4">
      <SPTransitionCollapseHeight>
        <div
          v-if="openList"
          class="max-h-[50vh] sm:max-h-[35vh] overflow-scroll border-t border-borderColor"
        >
          <div class="divide-y ">
            <div
              v-for="notification in notificationsList"
              :key="notification.id"
              class="notify-item flex items-center gap-4 px-3 py-2 bg-block"
            >
              <img
                :src="notification.image"
                alt=""
                width="40"
                height="40"
              >
              <div
                class="text-base"
                v-html="notification.html_markup"
              />
              <div>
                <a
                  class="button secondary sm hidden sm:flex"
                  :href="notification.target"
                  target="_blank"
                >
                  Перейти
                </a>
                <a
                  :href="notification.target"
                  class="sm:hidden"
                >
                  <Icon
                    name="mdi:chevron-right"
                    size="25"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SPTransitionCollapseHeight>
    </div>
  </div>
</template>
<style lang="scss">
.notify-item .blue {
  @apply text-primary font-bold hover:text-gray-100;
}
</style>
