<script setup lang="ts">
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();

const myQuote = "`Thanks to you, I didn't give up`";
const aboutMarkDown = `
Hi, I'm Kar Chun! I'm an Infrastructure and DevOps Engineer at Intel.
Welcome to my website, visit my [blog](./blog) for documentation, tutorials, and more.
I love to code and design software architecture.

My ambition is to develop a new technology that can revolutionize the world.
As part of my motivation to inspire people, this site shares what I have learned and studied previously.
If someone looked at me and said ${myQuote} that would be the best thing I could ever hope for. 🥳

You can contact me via these channels!

- [GitHub](https://github.com/karchunt)
- [Linkedin](https://www.linkedin.com/in/karchuntan)
- [Newsletter](https://karchunt.substack.com)
- [karchuntan.1999@gmail.com](mailto:karchuntan.1999@gmail.com)

It is my hope that you can find something useful or helpful here. Thank you!
`;

interface MyImages {
  url: string;
  width: string;
  height: string;
}

const images: MyImages[] = [
  {
    url: "/anotherme.webp",
    width: "250px",
    height: "350px",
  },
];
</script>

<template>
  <div class="about">
    <div className="flex flex-col gap-4">
      <h1>Meee 😎</h1>
      <div v-html="markdown.render(aboutMarkDown)"></div>
    </div>

    <div class="flex flex-wrap">
      <a
        class="cursor-pointer bg-cover bg-no-repeat bg-center mr-4 mt-4 rounded-xl"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        :href="image.url"
        target="_blank"
        :style="{
          backgroundImage: 'url(' + image.url + ')',
          width: image.width,
          height: image.height,
        }"
      >
      </a>
    </div>
  </div>
</template>
