import { selectedProduct } from "./products.js";

export function productDetails(mainEl: HTMLElement): void {
  if (!selectedProduct) {  // à importer
    location.hash = '/products';
    return;
  }

  const template = `
<div class="phone-image">
  <img class="phone" src="${selectedProduct.images[0]}" />
</div>
<h1>${selectedProduct.name}</h1>
<p>${selectedProduct.description}</p>
<ul class="phone-thumbs">
  ${selectedProduct.images.map((i) => `<li><img class="phone-thumb" src="${i}" /></li>`).join('')}
</ul>
  `;

  mainEl.innerHTML = template;

  const phoneThumbsEl = mainEl.querySelector<HTMLUListElement>('.phone-thumbs');
  const phoneEl = mainEl.querySelector<HTMLImageElement>('.phone');

  phoneThumbsEl.addEventListener('click', (event) => {
    const target = <HTMLImageElement> event.target;

    if (target.className === 'phone-thumb') {
      phoneEl.src = target.src;
    }
  })
}
