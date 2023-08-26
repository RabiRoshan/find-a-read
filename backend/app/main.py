from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def root():
    return {"message": "OK!"}


@app.get("/ping")
async def root():
    return {"message": "Pong!"}


@app.get("/books/{query}")
async def get_books(query: str, start_index: int = 0, max_results: int = 30):
    try:
        response = requests.get(
            f"https://www.googleapis.com/books/v1/volumes?q={query}&startIndex={start_index}&maxResults={max_results}")
        response.raise_for_status()  # Raises a HTTPError if the response status is 4xx, 5xx
    except requests.exceptions.HTTPError as err:
        print(f"HTTP error occurred: {err}")
        raise HTTPException(status_code=404, detail="not found")
    except requests.exceptions.RequestException as err:
        print(f"Error occurred: {err}")
        raise HTTPException(status_code=500, detail="not found")

    response_data = response.json()
    books = []
    for item in response_data.get('items', []):
        book_data = item['volumeInfo']
        book = {
            "id": item['id'],
            "title": book_data.get('title'),
            "description": book_data.get('description'),
            "authors": book_data.get('authors', []),
            "image": book_data['imageLinks']['thumbnail'] if 'imageLinks' in book_data and 'thumbnail' in book_data['imageLinks'] else None,
            "preview_url": book_data.get('previewLink')
        }
        books.append(book)

    if len(books) == 0:
        raise HTTPException(status_code=404, detail="not found")

    return books
