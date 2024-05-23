// import { ref } from "vue";
import { Post } from "@/types/Posts";

export default function useFetchPost() {
  let post: null | Post = null;
    const baseURL = process.env.VUE_APP_BASE_URL;

  const fetchPost = async (slug: any) => {
    try {
      const response = await fetch(
        `${baseURL}/api/app/dynamic-content/public?Slug=${slug}&Language=ar
        `
      );

      const data = await response.json();
      post = data;
      return post;

      // Assuming at least one post is returned
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  return { fetchPost };
}
