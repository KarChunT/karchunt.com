<script setup lang="ts">
import { getPost } from "../utils/posts";

defineProps<{
  insideDoc?: boolean;
}>();

const { nextPost, prevPost } = getPost();
</script>

<template>
  <footer
    class="mb-52 text-sm font-bold"
    :class="{ 'xs:show lg:hidden': insideDoc }"
  >
    <div v-if="nextPost" class="py-3">
      <h2 class="uppercase tracking-wide">Next Post</h2>
      <a target="_self" :href="`${nextPost.url}`">{{ nextPost.title }}</a>
    </div>

    <div v-if="prevPost" class="py-3">
      <h2 class="uppercase tracking-wide">Previous Post</h2>
      <a target="_self" :href="`${prevPost.url}`">{{ prevPost.title }}</a>
    </div>

    <div class="pt-3 pb-7">
      <a class="link" href="/blog">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: var(--vp-c-brand-1);
}
</style>
