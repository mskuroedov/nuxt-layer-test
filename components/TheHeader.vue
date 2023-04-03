<template>
  <header class="bg-primary text-white py-3">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink
          to="/"
          class="transition duration-200 opacity-100 hover:opacity-80"
        >
          <slot name="logo" />
        </NuxtLink>
        <DevOnly>
          <div>
            <slot name="right">
              <SPHeaderProfileBtn />
            </slot>
          </div>
        </devonly>
      </div>
    </div>
  </header>
</template>
