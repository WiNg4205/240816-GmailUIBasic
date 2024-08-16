<template>
  <div class="bg-navbarBg w-64">
    <button class="bg-composeBtn flex flex-row items-center gap-4 p-4 pr-6 my-4 mx-2 rounded-xl">
      <PencilIcon class="size-5" />
      <div class="font-semibold text-sm">Compose</div>
    </button>
    <div class="mb-4">
      <NavBarBtn :btn="InboxIcon" text="Inbox" class="bg-navbarFocus" />
      <NavBarBtn :btn="StarIcon" text="Starred" />
      <NavBarBtn :btn="ClockIcon" text="Snoozed" />
      <NavBarBtn :btn="ChevronDoubleRightIcon" text="Sent" />
      <NavBarBtn :btn="DocumentIcon" text="Drafts" />
      <NavBarBtn :btn="InboxStackIcon" text="All Mail" />
      <NavBarBtn :btn="ChevronDownIcon" text="More" />
    </div>
    <div class="flex justify-between px-6">
      <span class="font-semibold">Labels</span>
      <PlusIcon class="size-5" />
    </div>
  </div>
</template>

<script setup>
  import { PencilIcon, StarIcon, ClockIcon, ChevronDoubleRightIcon, DocumentIcon, InboxStackIcon, ChevronDownIcon, PlusIcon } from '@heroicons/vue/24/outline'
  import { InboxIcon } from '@heroicons/vue/24/solid'
</script>
