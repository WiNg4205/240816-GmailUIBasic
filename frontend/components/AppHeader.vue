<template>
  <div class="h-12 bg-headerBg flex border-b border-black">
    <Bars3Icon class="size-6"/>
    <EnvelopeIcon class="size-6" />
    <div class="">Gmail</div>
    <div class="flex bg-headerSearch w-64 h-8 border border-black">
      <MagnifyingGlassIcon class="size-6" />
      <input class="bg-headerSearch" placeholder="Search mail"></input>
      <AdjustmentsHorizontalIcon class="size-6" />
    </div>
    <QuestionMarkCircleIcon class="size-6" />
    <Cog6ToothIcon class="size-6" />
    <Squares2X2Icon class="size-6" />
  </div>
</template>

<script setup>
  import { Bars3Icon, EnvelopeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Cog6ToothIcon, Squares2X2Icon } from '@heroicons/vue/24/outline'
  import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'
</script>