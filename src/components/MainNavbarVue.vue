<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.id">
        <button @click="handleCategoryClick(item.slug)">{{ item.name }}</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
import { Categories } from "@/types/Categories";


interface ItemType {
  id: number;
  name: string;
  slug: string;
  type?: { name: string; slug: string } | null;
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Categories[]>,
      required: true,
    },
  },
  emits: ["category-clicked"],
  setup(props, { emit }) {
    const handleCategoryClick = (slug: string) => {
      emit("category-clicked", slug);
    };

    return { handleCategoryClick };
  },
});
</script>

<style>
nav {
  background-color: #272727;
  height: 72px;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 10px solid #f3cb38;
  z-index: 1000;
}
ul {
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
li {
  list-style: none;
}
button {
  padding: 8px;
}
button:hover {
  background-color: #424242;
  padding: 8px;
  margin: 0;
  border-radius: 8px;
}
</style>
