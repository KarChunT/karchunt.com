<script lang="ts">
import VueGallery from "vue-gallery";

const galleryImagesType: Record<string, number> = {
  penguin: 14,
  landscape: 1,
};
const galleryImages: string[] = [];

for (let key in galleryImagesType) {
  if (galleryImagesType.hasOwnProperty(key)) {
    let value = galleryImagesType[key];
    for (let i = 1; i <= value; i++) {
      galleryImages.push(`/gallery/${key}${i}.webp`);
    }
  }
}

// Vue local components
export default {
  data() {
    return {
      images: galleryImages,
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
};
</script>

<template>
  <div class="gallery">
    <div class="gallery-header">
      <h1>Gallery</h1>
    </div>

    <div class="gallery-content">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div class="mt-4">
        <div
          class="bg-cover bg-no-repeat bg-center float-left mr-4 mt-4 rounded-xl"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '300px',
            height: '300px',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
