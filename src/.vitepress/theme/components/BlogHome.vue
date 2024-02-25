<script setup lang="ts">
import { useData } from "vitepress";
import { VPButton } from "vitepress/theme";
import { data as posts } from "./posts.data";
import type { Post } from "./posts.data.ts";

const { frontmatter } = useData();

const getDateTime = (date: Post["date"]): string => {
  return new Date(date.time).toISOString();
};

const getTagPath = (tag: string): string => {
  return `./blog/tags/${tag}`;
};
</script>

<template>
  <div class="blog-home">
    <div class="text-center">
      <h1>
        {{ frontmatter.title }}
      </h1>

      <p class="text-lg">
        {{ frontmatter.subtext }}
      </p>

      <div class="flex justify-center flex-row gap-2">
        <VPButton text="Tags" theme="brand" size="medium" href="./blog/tags" />
        <VPButton
          text="Archives"
          theme="alt"
          size="medium"
          href="./blog/archives"
        />
      </div>
    </div>

    <div class="mt-12">
      <div v-for="{ title, url, date, tags, excerpt } of posts">
        <article class="mt-9">
          <time
            class="text-gray-500 dark:text-gray-400 font-medium"
            :datetime="getDateTime(date)"
            >{{ date.string }}</time
          >
          <h2>
            <a :href="url">{{ title }}</a>
          </h2>
          <div class="-mt-3 float-left space-x-2" v-if="tags.length != 0">
            <a v-for="tag in tags" :href="getTagPath(tag)">
              {{ tag }}
            </a>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 clear-left"
            v-if="excerpt"
            v-html="excerpt"
          ></div>
        </article>
      </div>
    </div>
  </div>
</template>

<style>
.blog-home h2 {
  border: none;
  margin-top: 0px;
  padding-top: 8px;
}

.blog-home a {
  text-decoration: none;
}

.blog-home h2 a {
  color: black;
}

.dark .blog-home h2 a {
  color: white;
}
</style>
