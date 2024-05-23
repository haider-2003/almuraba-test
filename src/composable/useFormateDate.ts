// useFormatDate.ts


export default function useFormatDate() {
  const formatPublishDate = (dateString: string) => {
    // Parse the date string
    const date = new Date(dateString);
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    // Return formatted date
    return `${year}-${month}-${day}`;
  };

  return {
    formatPublishDate,
  };
}
