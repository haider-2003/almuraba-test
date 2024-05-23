<template>
  <div>
    <MainNavbarVue :items="items" @category-clicked="updateSlug" />
    <NewsCard :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import MainNavbarVue from "@/components/MainNavbarVue.vue";
import NewsCard from "@/components/NewsCard.vue";
import useFetchCategories from "@/composable/useFetchCategories";
import useFetchPosts from "@/composable/useFetchPosts";
import { useRoute } from "vue-router";
import { Post } from "@/types/Posts";

export default defineComponent({
  name: "HomeView",
  components: { NewsCard, MainNavbarVue },
  setup() {
    const route = useRoute();
    const selectedSlug = ref<string>(route.query.slug as string);


    const { items } = useFetchCategories();
    const posts = ref<Post[]>([]);

    const updateSlug = (slug: string) => {
      selectedSlug.value = slug;
    };

    const { fetchData } = useFetchPosts();

    watch(
      selectedSlug,
      async () => {
        posts.value = await fetchData(selectedSlug.value);
      },
      { deep: true }
    );

    return { items, posts, selectedSlug, updateSlug };
  },
});
</script>
