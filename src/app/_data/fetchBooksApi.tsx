// `fetchBooks` is a function that fetches books from the Google Books API
// and returns the response as JSON. It takes in three parameters:
// - searchTerm: string
// - startIndex: number
// - maxResults: number
export default async function fetchBooks(
  searchTerm: string,
  startIndex: number = 0,
  maxResults: number = 1
): Promise<Book[]> {
  // Ensure startIndex and maxResults are within valid range
  startIndex = Math.max(0, startIndex);
  maxResults = Math.max(1, maxResults);

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

interface VolumeInfo {
  title: string;
  description: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  authors: string[];
  previewLink: string;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}
