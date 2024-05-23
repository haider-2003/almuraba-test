<template>
  <div class="container">
    <div v-if="posts">
      <div class="card" v-for="post in posts" :key="post">
        <div class="content">
          <h4>
            {{ post.title }}
          </h4>
          <div class="info">
            <div class="item">
              <span class="icon material-symbols-outlined">
                calendar_month
              </span>
              <span class="date-text">
                {{ formatPublishDate(post.publishDate) }}
              </span>
            </div>
            <div class="item">
              <span class="icon material-symbols-outlined"> sell </span>
              <span class="date-text"> {{ post.categories[0].name }} </span>
            </div>
          </div>
          <div class="subtitle">
            {{ post.description.slice(0, 28) + "..." }}
          </div>
          <button class="btn" @click="goToDetails(post.slug)">
            اكمل القراءة
          </button>
        </div>
        <div class="img-container">
          <img class="card-img" :src="imageUrl('sm', post.images[0])" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useFormatDate from "@/composable/useFormateDate";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    posts: {
      required: true,
      type: Object,
    },
  },
  setup() {
    const router = useRouter();
    const { formatPublishDate } = useFormatDate();
    function imageUrl(size: string, img: string) {
      return `http://164.92.187.207:5005//host/cms/images/${size}/${img}`;
    }
    function goToDetails(slug: string) {
      router.push({ name: "postDetails", params: { slug } });
    }

    return { formatPublishDate, imageUrl, goToDetails };
  },
});
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.card {
  display: flex;
  width: 500px;
  height: 200px;
  padding: 20px;
  font-size: 16px;
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 10px;
  position: relative;
  -webkit-box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 5px 9px 0px rgba(0, 0, 0, 0.75);
}
.content {
  width: 60%;
  height: 100%;
  margin: 10px;
  color: #585858;
  direction: rtl;
}
.info {
  display: flex;
  gap: 10px;
}
.item {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.info .icon {
  font-size: 17px;
}
.date-text {
  font-size: 12px;
}
.subtitle {
  font-size: 12px;
  margin-top: 5px;
}
.btn {
  color: #9e9e9e;
  position: absolute;
  left: 10px;
  text-decoration: none;
  margin: 5px;
  padding: 3px 5px;
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  font-size: 12px;
}
.btn:hover {
  background-color: #eceff1;
}
.img-container {
  width: 40%;
  height: 100%;
}
.card-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
}
</style>
