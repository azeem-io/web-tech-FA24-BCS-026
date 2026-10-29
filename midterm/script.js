const cart = [];
const limit = (26 % 4) + 2;
const cards = document.querySelectorAll('.game');
const icon = document.querySelector('.cart');
const panel = document.querySelector('#mini-cart');
const list = document.querySelector('#cart-list');
const badge = document.querySelector('#cart-count');
const total = document.querySelector('#cart-total');

function updateCart() {
  badge.textContent = cart.length;
  list.innerHTML = '';

  if (cart.length === 0) {
    list.innerHTML = '<li>Your cart is empty.</li>';
  }

  cart.forEach((item, index) => {
    const row = document.createElement('li');
    const text = document.createElement('span');
    const button = document.createElement('button');

    text.textContent = item.name + ' - $' + item.price.toFixed(2);
    button.textContent = 'Remove';
    button.type = 'button';
    button.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    row.appendChild(text);
    row.appendChild(button);
    list.appendChild(row);
  });

  total.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  cards.forEach(card => {
    const button = card.querySelector('button');
    const count = cart.filter(item => item.id === card.id).length;
    button.disabled = count >= limit;
    button.textContent = count >= limit ? 'Limit reached' : 'Add to Cart';
  });
}

cards.forEach(card => {
  const button = card.querySelector('button');
  button.addEventListener('click', () => {
    const count = cart.filter(item => item.id === card.id).length;
    if (count >= limit) return;

    const name = card.querySelector('h3').textContent.trim();
    const price = Number(card.querySelector('.price').textContent.replace('$', ''));
    cart.push({ id: card.id, name: name, price: price });
    updateCart();
  });
});

icon.addEventListener('click', event => {
  event.preventDefault();
  panel.hidden = !panel.hidden;
  icon.setAttribute('aria-expanded', String(!panel.hidden));
});

updateCart();
