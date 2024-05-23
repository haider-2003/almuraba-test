export default function useFetchPosts() {
  const baseURL = process.env.VUE_APP_BASE_URL;
  const fetchData = async (slug: string) => {
    try {
      console.log(process.env.VUE_APP_BASE_URL);
      
      const response = await fetch(
        `${baseURL}/api/app/dynamic-content/publics?CategorySlug=${slug}&Language=ar`
      );
      const data = await response.json();

      if (data.totalCount > 0) {
        return data.items;
      } else {
        console.error("No data found for slug:", slug);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { fetchData };
}
