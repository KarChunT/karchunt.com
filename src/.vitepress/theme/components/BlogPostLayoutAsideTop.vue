<script setup lang="ts">
import { getTagPath } from "../utils/tags";
import { getPost } from "../utils/posts";

defineProps<{
  insideDoc?: boolean;
}>();

const { currentPost } = getPost();
</script>

<template>
  <div class="text-sm font-bold" :class="{ 'xs:show lg:hidden': insideDoc }">
    <h2 class="uppercase tracking-wide">Tags</h2>
    <div class="flex flex-wrap gap-2 pb-5">
      <a class="" v-for="tag in currentPost.tags" :href="getTagPath(tag)">
        {{ tag }}
      </a>
    </div>
  </div>
</template>

<style scoped>
a {
  color: var(--vp-c-brand-1);
}
</style>
