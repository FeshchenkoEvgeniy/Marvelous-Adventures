import Notiflix from 'notiflix';

import { fetchPhoto } from './galleryApi';

const form = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery')!
const loadMore = document.querySelector('.load-more')

let page:number = 1;
let query: string = ''

function submitForm(evt: Event) {
    evt.preventDefault()
    
    const form = evt.target as HTMLFormElement;
    const searchQuery = form.elements.namedItem('searchQuery') as HTMLInputElement;
    
    query = searchQuery.value
    page = 1;
    loadMore?.setAttribute('hidden', '')

    fetchPhoto(searchQuery.value, page)
        .then((data: TypeGallery) => {
            if (!data.hits.length) {
                Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
                galleryContainer.innerHTML = '';
            } else {
                galleryContainer.innerHTML = createMarkup(data.hits)
                if (data.totalHits < 40) {
                    loadMore?.setAttribute('hidden', '')
                } else {
                    loadMore?.removeAttribute('hidden')
                }
                Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
            }
})
        .catch((err: Error) => console.log(err))
}

function onClick(evt: Event) {
    page += 1;
    fetchPhoto(query, page)
        .then((data: TypeGallery) => {
            if (page * 40 > data.totalHits) {
                loadMore?.setAttribute('hidden', '')
                Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
            }
            galleryContainer.insertAdjacentHTML("beforeend", createMarkup(data.hits))
        })
        .catch((err: Error) => console.log(err))
}

function createMarkup(data: imageHit[]):string {
    return data.map(({webformatURL, tags, likes, views, comments,downloads}) => {
        return `
    <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div>
        `
    }).join('')
}


form?.addEventListener('submit', submitForm)
loadMore?.addEventListener('click', onClick)

interface imageHit {
    webformatURL: string
    tags: string
    likes: number
    views: number
    comments: number
    downloads: number
}

interface TypeGallery {
    hits: imageHit[]
    total: number
    totalHits: number
}
