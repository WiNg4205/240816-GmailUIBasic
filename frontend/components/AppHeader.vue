<template>
  <div class="flex flex-row items-center h-16 bg-headerBg">
    <div class="flex flex-row items-center w-64 pl-6 gap-2">
      <Bars3Icon class="size-6 mr-3"/>
      <EnvelopeIcon class="size-8" />
      <div class="text-xl tracking-tighter">Gmail</div>      
    </div>
    <div class="flex flex-grow">
      <div class="flex w-customXL h-12 rounded-full items-center bg-headerSearch p-4 justify-between">
        <div class="flex items-center gap-2">
          <MagnifyingGlassIcon class="size-5" />
          <input class="bg-headerSearch" placeholder="Search mail"></input>          
        </div>
        <AdjustmentsHorizontalIcon class="size-6" />        
      </div>
    </div>
    <div class="w-48 flex justify-center items-center gap-5">
      <QuestionMarkCircleIcon class="size-6" />
      <Cog6ToothIcon class="size-6" />
      <Squares2X2Icon class="size-6" />
      <div class="bg-userIcon text-white size-8 rounded-full flex items-center justify-center">
        <span>W</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Bars3Icon, EnvelopeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Cog6ToothIcon, Squares2X2Icon } from '@heroicons/vue/24/outline'
  import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'
</script>
