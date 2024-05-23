<template>
  <div v-if="post" class="container">
    <h1 class="header">{{ post.title }}</h1>
    <div class="info">
      <div class="item">
        <span class="icon material-symbols-outlined"> calendar_month </span>
        <span class="date-text">
          {{ formatPublishDate(post.publishDate) }}
        </span>
      </div>
      <div class="item">
        <span class="icon material-symbols-outlined"> sell </span>
        <span class="date-text"> {{ post.categories[0].name }} </span>
      </div>
    </div>
    <div class="img-container">
      <img :src="imageUrl('md', post.images[0])" />
    </div>
    <div class="paraghraph">
      <p v-if="post && post.content">{{ JSON.parse(post.content) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import useFetchPost from "@/composable/useFetchPost";
import useFormatDate from "@/composable/useFormateDate";
import { Post } from "@/types/Posts";
export default defineComponent({
  setup() {
    const route = useRoute();
    const slug = ref<string | string[]>("");
    const { fetchPost } = useFetchPost();
    const post = ref<null | Post>(null);
    const { formatPublishDate } = useFormatDate();

    onMounted(async () => {
      slug.value = route.params.slug;
      if (slug.value) {
        post.value = await fetchPost(slug.value);
      }
    });
    function imageUrl(size: string, img: string) {
      return `http://164.92.187.207:5005//host/cms/images/${size}/${img}`;
    }
    return { formatPublishDate, post, imageUrl };
  },
});
</script>

<style scoped>
.container {
  width: 900px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  direction: rtl;
}
.info {
  display: flex;
  gap: 10px;
}
.item {
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9e9e9e;
}

.info .icon {
  font-size: 17px;
}
.date-text {
  font-size: 16px;
}
.img-container {
  width: 800px;
}
.img-container img {
  width: 100%;
}
</style>
