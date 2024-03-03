import { computed } from "vue";
import { useRoute } from "vitepress";
import { data as posts } from "../components/posts.data";

export const getPost = () => {
  const path = useRoute().path;
  const currentIndex = posts.findIndex((p) => p.url === path);
  const currentPost = computed(() => posts[currentIndex]);
  const nextPost = computed(() => posts[currentIndex - 1]);
  const prevPost = computed(() => posts[currentIndex + 1]);

  return { currentPost, nextPost, prevPost };
};
