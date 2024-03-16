<script setup lang="ts">
import { VPBadge, VPButton } from "vitepress/theme";

const formatDate = (raw: string) => {
  const date = new Date(raw);
  date.setUTCHours(12);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface RoadmapContent {
  title: string;
  description: string;
  dateString: string;
  link: string;
  isComplete: string;
}

const roadmapContents: RoadmapContent[] = [
  // {
  //   title: "Sample",
  //   description: "sample description",
  //   dateString: formatDate("2024-01-01"),
  //   link: "",
  //   isComplete: "false",
  // },
];
</script>

<template>
  <div class="roadmap">
    <div class="roadmap-header text-center">
      <h1>Roadmap</h1>
    </div>

    <div class="roadmap-content">
      <ul class="relative border-s border-gray-500 dark:border-gray-400">
        <li class="mb-10 ms-4" v-for="roadmapContent in roadmapContents">
          <div
            class="absolute w-6 h-6 bg-gray-500 rounded-full -start-3 border border-white dark:border-gray-900 dark:bg-gray-400"
          ></div>

          <time class="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {{ roadmapContent.dateString }}
          </time>

          <VPBadge
            class="ms-2"
            :type="roadmapContent.isComplete === 'true' ? 'tip' : 'warning'"
            :text="roadmapContent.isComplete === 'true' ? 'Complete' : 'WIP'"
          />

          <h2 class="text-[color:var(--vp-c-brand-1)]">
            {{ roadmapContent.title }}
          </h2>

          <p class="mb-4">
            {{ roadmapContent.description }}
          </p>

          <VPButton
            text="Learn more"
            theme="sponsor"
            size="medium"
            :href="roadmapContent.link"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.roadmap-content ul {
  list-style-type: none;
}

.roadmap-content a {
  text-decoration: none;
}
</style>
