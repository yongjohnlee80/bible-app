const API_URL = "https://bible-api.com";

export async function httpGetBibleText(book: string, chapter: number) {
    const response = await fetch(`${API_URL}/${book}${chapter}`);
    const result = await response.json();
    return result;
}
