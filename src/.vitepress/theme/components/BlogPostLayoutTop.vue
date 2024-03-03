<script setup lang="ts">
import { getPost } from "../utils/posts";
import { getDateTime } from "../utils/common";

const { currentPost } = getPost();
</script>

<template>
  <header class="space-y-1 text-center pb-4">
    <time
      class="text-gray-500 dark:text-gray-400 font-medium"
      :datetime="getDateTime(currentPost.date)"
      >{{ currentPost.date.string }}</time
    >
    <h1
      class="text-3xl sm:text-4x md:text-5xl font-extrabold text-[color:var(--vp-c-brand-1)]"
    >
      {{ currentPost.title }}
    </h1>

    <p class="py-4">
      {{ currentPost.description }}
    </p>
  </header>
</template>
