import { Product, Response } from "./model.js";
import { filters } from "./search.js";

export let selectedProduct: Product = null;
const selectedProductLocalStorage = localStorage.getItem('selectedProduct');

if (selectedProductLocalStorage) {
  selectedProduct = JSON.parse(selectedProductLocalStorage);
}

let productsList: Product[] = [];

export function products(mainEl: HTMLElement): void {
  const template = `
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Additionnal Features</th>
    <th>Actions</th>
  </tr>
</table>
  `;

  mainEl.innerHTML = template;

  const tableEl = mainEl.querySelector('table');

  fetchProducts().then((data) => {
    productsList = data.rows.map((r) => r.doc);

    for (const product of applyFilters(productsList)) {
      const trEl = createProductRow(product);
      tableEl.appendChild(trEl);
    }
  });

  tableEl.addEventListener('click', (event) => {
    const target = <HTMLElement> event.target;

    if (target.className === 'show-link') {
      selectedProduct = productsList.find(
        (p) => p._id === target.dataset.productId,
      );
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }
  });
}

async function fetchProducts(): Promise<Response> {
  const res = await fetch(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true'
  );
  return await res.json();
}

function createProductRow(product: Product) {
  const trEl = document.createElement('tr');

  const tdIdEl = document.createElement('td');
  tdIdEl.innerText = product._id;
  trEl.appendChild(tdIdEl);

  const tdNameEl = document.createElement('td');
  tdNameEl.innerText = product.name;
  trEl.appendChild(tdNameEl);

  const tdAdditionalFeaturesEl = document.createElement('td');
  tdAdditionalFeaturesEl.innerText = product.additionalFeatures;
  trEl.appendChild(tdAdditionalFeaturesEl);

  const tdActions = document.createElement('td');
  const linkShowEl = document.createElement('a');
  linkShowEl.innerText = 'Show';
  linkShowEl.href = '#/product-details';
  linkShowEl.className = 'show-link';
  linkShowEl.dataset.productId = product._id;
  tdActions.appendChild(linkShowEl);
  trEl.appendChild(tdActions);

  return trEl;
}

function applyFilters(products: Product[]) {
  let results = products;

  if (filters.name) {  // à importer
    results = results.filter((p) =>
      p.name.toLowerCase().includes(filters.name.toLowerCase()),
    );
  }

  if (filters.fmRadio !== 'whatever') {
    results = results.filter(
      (p) =>
        (p.hardware.fmRadio && filters.fmRadio === 'yes') ||
        (!p.hardware.fmRadio && filters.fmRadio === 'no'),
    );
  }

  if (filters.availability.length) {
    results = results.filter((p) =>
      p.availability.some((el) => filters.availability.includes(el)),
    );
  }

  return results;
}
