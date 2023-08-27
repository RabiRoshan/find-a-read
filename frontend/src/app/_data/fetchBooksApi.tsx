"use server";

// `fetchBooks` is a function that fetches books from the Google Books API
// and returns the response as JSON. It takes in three parameters:
// - searchTerm: string
// - startIndex: number
// - maxResults: number
export default async function fetchBooks(
  searchTerm: string,
  startIndex: number = 0,
  maxResults: number = 30
): Promise<Book[]> {
  // Ensure startIndex and maxResults are within valid range
  startIndex = Math.max(0, startIndex);
  maxResults = Math.max(1, maxResults);

  try {
    const response = await fetch(
      `http://127.0.0.1:5000/books/${searchTerm}?start_index=${startIndex}&max_results=${maxResults}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Map the data to the Book interface
    return data.map(
      (book: any): Book => ({
        id: book.id,
        title: book.title,
        description: book.description ?? "No description available",
        image:
          book.image ??
          "https://books.google.co.in/googlebooks/images/no_cover_thumb.gif",
        authors: book.authors ?? undefined,
        previewUrl: book.preview_url,
      })
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

export interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  authors: string[];
  previewUrl: string;
}
