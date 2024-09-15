import { openModal } from "./helpers";
import { variables } from "./variables";

const container = document.querySelector('.js-list')

const favoriteArr = JSON.parse(localStorage.getItem(variables.FAVORITE_KEY)) ?? [];

function createMarkup(arr) {
    if (arr.length) {
        return arr.map(({ id, img, name }) =>
            `<li class="product-item" data-id='${id}'>
        <a href="#" class="product-link" data-id='${id}'>
        <img src="${img}" alt="${name}" class='product-img' data-id='${id}'/>
        <p class="product-title" data-id='${id}'>${name}</p>
        </a>
        <div class='product-container__btn' data-id='${id}'>
        <button type='button' class='product-btn' data-action="delete" data-id='${id}'>Remove from favorites</button>
        </div>
    </li>`
        ).join('')
    } else {
        return '<li><p>You have not yet added products to your favorites.</p></li>'
    }
}
const markup = createMarkup(favoriteArr)

container.innerHTML = markup;

function onClick(evt) {
    const {target} = evt
    const currentId = Number(evt.target.dataset.id);
    const idx = favoriteArr.findIndex(({ id }) => currentId === id)
    if (target.classList.contains('product-img') || target.classList.contains('product-container__btn') || target.classList.contains('product-title')) {
        openModal(currentId)
    }
    if (target.classList.contains('product-btn')) {
        const action = target.dataset.action;
        if (action === 'delete') {
            favoriteArr.splice(idx, 1)
            const newMarkup = createMarkup(favoriteArr)
            container.innerHTML = newMarkup;
            localStorage.setItem(variables.FAVORITE_KEY, JSON.stringify(favoriteArr))
        }
    }
}

container.addEventListener('click', onClick)
