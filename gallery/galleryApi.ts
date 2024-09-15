const API_KEY: string = '45993334-5702d74b5b517c6ee15bf1b69'
const BASE_URL: string = 'https://pixabay.com/api/'

async function fetchPhoto(query: string, page:number) {
    const resp = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return await resp.json();
}


export {fetchPhoto}