import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import { customAlphabet } from 'nanoid';
import { variables } from "./variables";
import { toastifyError, findData, modalForm, findIndex } from './helpers';
import { instruments } from './data';

const container = document.querySelector('.js-list');
const addProductBtn = document.querySelector('.js-addProduct');

let data = JSON.parse(localStorage.getItem(variables.DATA_KEY)) ?? instruments;

function createMarkup(arr) {
    return arr.map(({ id, img, name }) => `
        <li class="product-item" data-id='${id}'>
            <a href="#" class="product-link" data-id='${id}'>
                <img src="${img}" alt="${name}" class='product-img' data-id='${id}'/>
                <p class="product-title" data-id='${id}'>${name}</p>
            </a>
            <div class='product-container__btn' data-id='${id}'>
                <button type='button' class='product-btn' data-action="edit" data-id='${id}'>Edit</button>
                <button type='button' class='product-btn' data-action="remove" data-id='${id}'>Remove</button>
            </div>
        </li>
    `).join('');
}

function updateMarkup() {
    container.innerHTML = createMarkup(data);
    localStorage.setItem(variables.DATA_KEY, JSON.stringify(data));
}

function handleFormSubmit(evt, id = null) {
    evt.preventDefault();
    const form = evt.target;

    const name = form.elements.name.value;
    const price = Number(form.elements.price.value);
    const img = form.elements.img.value;
    const description = form.elements.description.value;

    if (!name || !price || !img || !description) {
        toastifyError("Please fill in all the fields!");
        return;
    } else if (isNaN(price)) {
        toastifyError("The price field must be a number");
        return;
    }

    const obj = { 
        id: id || Number(customAlphabet('1234567890', 10)()), 
        name, 
        price, 
        img, 
        description 
    };

    if (id) {
        const idx = findIndex(id);
        data.splice(idx, 1, obj);
    } else {
        data.push(obj);
    }

    updateMarkup();
    form.reset();
}

function onClick(evt) {
    const { target } = evt;
    const currentId = Number(target.dataset.id);
    const action = target.dataset.action;

    if (action === 'remove') {
        data.splice(findIndex(currentId), 1);
        updateMarkup();
    } else if (action === 'edit') {
        const instance = basicLightbox.create(modalForm);
        instance.show();

        const form = document.querySelector('.js-form');
        const element = findData(currentId);

        form.elements.name.value = element.name;
        form.elements.price.value = element.price;
        form.elements.img.value = element.img;
        form.elements.description.value = element.description;

        form.addEventListener('submit', (evt) => handleFormSubmit(evt, currentId));
    }
}

function addNewProduct() {
    const instance = basicLightbox.create(modalForm);
    instance.show();

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', handleFormSubmit);
}

container.addEventListener('click', onClick);
addProductBtn.addEventListener('click', addNewProduct);

updateMarkup();