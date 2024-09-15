import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basiclightbox.min.css';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

import { instruments } from './data';
import { variables } from './variables';

const data = JSON.parse(localStorage.getItem(variables.DATA_KEY)) ?? instruments

function openModal(currentId) {
    const {name, description, price, img} = data.find(({ id }) => id === currentId);
    const instance = basicLightbox.create(`
	<div class='modal'>
        <img src="${img}" alt="${name}" width='400'>
        <div>
        <p><span class='modal-span'>Назва:</span> ${name}</p>
        <p><span class='modal-span'>Ціна:</span> ${price} грн.</p>
        <p><span class='modal-span'>Опис товару:</span> ${description}</p>
        </div>
    </div>
`)
    instance.show()
}

function findData(currentId) {
    return data.find(({ id }) => id === currentId);
}

function findIndex(currentId) {
    return data.findIndex(({ id }) => id === currentId);
}

function toastifyError(str) {
   return Toastify({
    text: str,
    duration: 2000,
    style: {
        background: "red",
    }
}).showToast();
}

const modalForm = `<div class='add-modal'>
        <form action="" class='js-form'>
         <div><label for="name">Name product</label>
         <input type="text" name="name"/></div>
         <div><label for="price">Price product</label>
         <input type="text" name="price"/></div>
         <div> <label for="img">Image product</label>
         <input type="text" name="img"/></div>
         <div><label for="description">Description</label>
         <textarea name="description"></textarea></div>
         <button type='submit'>Add product</button>
        </form>
    </div>
`

export {openModal, findData, toastifyError, modalForm, findIndex}