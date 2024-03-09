<script setup lang="ts">
import { inBrowser } from "vitepress";
import { ref } from "vue";
import { postsTags } from "../utils/tags";

const selectedTag = ref("");
const toggleTag = (tag: string) => {
  selectedTag.value = tag;
};

const postsByTag = postsTags();

if (inBrowser) {
  const params = new URLSearchParams(window.location.search);
  const tag = params.get("tag");
  if (tag) {
    if (tag in postsByTag) {
      toggleTag(tag);
    }
  }
}
</script>

<template>
  <ClientOnly>
    <div class="tags flex flex-col gap-4">
      <div class="text-center">
        <h1>Tags</h1>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="(posts, tag) in postsByTag" @click="toggleTag(tag)">
          <button
            :class="{
              noselect: selectedTag !== tag,
              select: selectedTag === tag,
            }"
          >
            {{ tag + " (" + posts.length + ")" }}
          </button>
        </div>
      </div>

      <div v-if="selectedTag">
        <div>
          <h2>{{ selectedTag }} ({{ postsByTag[selectedTag].length }})</h2>
        </div>

        <a
          v-for="post in postsByTag[selectedTag]"
          :href="post.url"
          class="flex items-center justify-between gap-4 pb-4"
        >
          <div class="flex-1">
            {{ post.title }}
          </div>

          <div>
            {{ post.date.string }}
          </div>
        </a>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.tags h2 {
  border: none;
  padding: 0px;
  margin: 16px 0px;
}

.tags button {
  display: inline-block;
  border: 1px solid var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.tags button:active {
  transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

.tags button:hover,
.tags button.select {
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}

.tags button.noselect {
  border: 1px solid var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.tags button:active {
  border-color: var(--vp-button-sponsor-active-border);
  color: var(--vp-button-sponsor-active-text);
  background-color: var(--vp-button-sponsor-active-bg);
}
</style>
