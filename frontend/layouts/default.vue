<template>
  <div class="grid grid-rows-[auto,1fr] grid-cols-[auto,1fr] min-h-screen bg-navbarBg">
    <AppHeader class="col-span-2"/>
    <AppNavBar />
    <slot />   
  </div>
</template>