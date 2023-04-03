<template>
  <div
    class="flex text-textColor
           max-w-full max-h-[95vh] overflow-scroll overscroll-contain
           sm:max-w-[500px]"
  >
    <div
      class="flex flex-col min-w-full sm:min-w-[500px]
             divide-y divide-borderColor "
    >
      <div class="px-4 py-3 min-w-full">
        <SPUserDropdownMenuAuth />
      </div>
      <div class="px-4 pt-2">
        <SPUserDropdownMenuNotifications />
      </div>
      <div class="px-4 py-3">
        <SPUserDropdownMenuNav />
      </div>
    </div>
  </div>
</template>
