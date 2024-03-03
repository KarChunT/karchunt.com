<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BlogPostLayoutAsideBottom from "./BlogPostLayoutAsideBottom.vue";
import BlogPostLayoutAsideTop from "./BlogPostLayoutAsideTop.vue";
import BlogPostLayoutTop from "./BlogPostLayoutTop.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <!-- Post Layout (Top) -->
    <template #doc-before v-if="frontmatter.publish">
      <BlogPostLayoutTop />
    </template>

    <!-- Post Layout (Bottom) -->
    <template #doc-footer-before v-if="frontmatter.publish">
      <BlogPostLayoutAsideTop insideDoc />
      <BlogPostLayoutAsideBottom insideDoc />
    </template>

    <!-- Post Layout (Aside-top) -->
    <template #aside-top v-if="frontmatter.publish">
      <BlogPostLayoutAsideTop />
    </template>

    <!-- Post Layout (Aside-bottom) -->
    <template #aside-bottom v-if="frontmatter.publish">
      <BlogPostLayoutAsideBottom />
    </template>
  </Layout>
</template>
