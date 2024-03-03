<script setup lang="ts">
import { data as posts } from "./posts.data";
import type { Post } from "./posts.data.ts";

const postsByYear = () => {
  const data: Post[][] = [];
  let year: string = "";
  let num: number = -1;

  for (let i = 0; i < posts.length; i++) {
    const post: Post = posts[i];
    if (post.date) {
      const postYear: string = post.date.year;
      if (year === postYear) {
        data[num].push(post);
      } else {
        num++;
        data[num] = [] as Array<Post>;
        data[num].push(post);
        year = postYear;
      }
    }
  }
  return data;
};
</script>

<template>
  <div class="archives">
    <div class="text-center">
      <h1>Archives</h1>
    </div>

    <div class="archives-content">
      <div v-for="posts in postsByYear()">
        <h2>
          {{ posts[0].date.year }}
        </h2>
        <a
          v-for="post in posts"
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
  </div>
</template>

<style scoped>
.archives h2 {
  border: none;
  padding: 0px;
  margin: 16px 0px;
}
</style>
