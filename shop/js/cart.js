import { variables } from "./variables"

const container = document.querySelector('.js-list')
const total = document.querySelector('.js-total')

const cartArr = JSON.parse(localStorage.getItem(variables.CART_KEY)) ?? []
let totalPrice = 0;

cartArr.forEach(item => {
    if (!item.quantity) {
        item.quantity = 1;
    }
});

function createMarkup(arr) {
    totalPrice = 0;
    if (arr.length) {
        return arr.map(({ id, img, name, price, quantity }) => {
        totalPrice += price * quantity
        return `<li class="product-item" data-id='${id}'>
        <img src="${img}" alt="${name}" class='product-img' data-id='${id}'/>
        <div>
        <p class="product-title" data-id='${id}'><b>Name:</b> ${name}</p>
        <p class="product-price js-price" data-id='${id}'><b>Price:</b> ${price}</p>
        </div>
        <div class='product-container__btn' data-id='${id}'>
        <button type='button' class=' product-btn product-decrement' data-action="decrement" data-id='${id}'>-1</button>
        <p class='product-quantity js-quantity'>${quantity}</p>
        <button type='button' class='product-btn product-increment' data-action="increment" data-id='${id}'>+1</button>
        <button type='button' class='product-btn product-delete' data-action="delete" data-id='${id}'>Remove from cart</button>
        </div>
    </li>`
        }).join('')
    } else {
        return '<li><p>You have not yet added products to your cart.</p></li>'
    }
}

function updateMarkup() {
    const newMarkup = createMarkup(cartArr);
    container.innerHTML = newMarkup;
    total.textContent = `Total price - ${totalPrice}`;
    localStorage.setItem(variables.CART_KEY, JSON.stringify(cartArr));
}

updateMarkup();


function onClick(evt) {
    const { target } = evt
    const currentId = Number(evt.target.dataset.id);
    const idx = cartArr.findIndex(({ id }) => currentId === id)
    if (target.classList.contains('product-btn')) {
        const action = target.dataset.action
        switch (action) {
            case "increment":
                cartArr[idx].quantity += 1;
                break;
            case 'decrement':
                if (cartArr[idx].quantity > 1) {
                cartArr[idx].quantity -= 1;
            }
                break;
            case 'delete':
                cartArr.splice(idx, 1);
                break;
        }
        updateMarkup();
    }
}

container.addEventListener('click', onClick)
