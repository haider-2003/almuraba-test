import { ref } from "vue";
import { Categories } from "@/types/Categories";

export default function useFetchCategories() {
  const items = ref<Categories[]>([]);
  const baseUrl = process.env.VUE_APP_BASE_URL

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/api/app/category/publics?Language=ar`
      );
      const data = await response.json();
      items.value = data.slice(0, 5);
      return items;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  fetchCategories();

  return { items };
}
