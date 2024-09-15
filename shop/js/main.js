import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import { instruments } from './data'
import {variables} from './variables'
import { openModal, findData, toastifyError } from './helpers';


const container = document.querySelector('.js-list')

const favoriteArr = JSON.parse(localStorage.getItem(variables.FAVORITE_KEY)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(variables.CART_KEY)) ?? [];
const data = JSON.parse(localStorage.getItem(variables.DATA_KEY)) ?? instruments

const markUp = data.map(({ id, img, name }) => 
   `<li class="product-item" data-id='${id}'>
        <a href="#" class="product-link" data-id='${id}'>
        <img src="${img}" alt="${name}" class='product-img' data-id='${id}'/>
        <p class="product-title" data-id='${id}'>${name}</p>
        </a>
        <div class='product-container__btn' data-id='${id}'>
        <button type='button' class='product-btn' data-action="favorite" data-id='${id}'>Add to Favorite</button>
        <button type='button' class='product-btn' data-action="cart" data-id='${id}'>Add to Cart</button>
        </div>
    </li>`
).join('')

container.insertAdjacentHTML('beforeend', markUp)

function onClick(evt) {
    evt.preventDefault()
    const { target } = evt;
    const currentId = Number(target.dataset.id)
    if (target.classList.contains('product-img') || target.classList.contains('product-container__btn') || target.classList.contains('product-title')) {
        openModal(currentId)
    }
    if (target.classList.contains('product-btn')){
        const action = target.dataset.action;
        if (action === 'favorite') {
            const data = findData(currentId)
            const inStorage = favoriteArr.some(({ id }) => data.id === id)
            if (inStorage) {
                toastifyError("This product has already been added to your favorites!")
                return
            }

            addToFavorite(data)
        } else if (action === 'cart') {
            const data = findData(currentId)
            const inStorage = cartArr.some(({ id }) => data.id === id)
            if (inStorage) {
                toastifyError("This product has already been added to your favorites!")
                return
            }

            addToCart(data)
        }
    }
}

function addToFavorite(obj) {
    favoriteArr.push(obj)
    localStorage.setItem(variables.FAVORITE_KEY, JSON.stringify(favoriteArr))
}

function addToCart(obj) {
    cartArr.push(obj)
    localStorage.setItem(variables.CART_KEY, JSON.stringify(cartArr))
}


// setTimeout(() => openModal(Math.ceil(Math.random() * instruments.length)), 15000)

container.addEventListener('click', onClick)
