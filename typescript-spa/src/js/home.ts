export function home(mainEl: HTMLElement): void {
  const template = `
<a href="https://www.st.com/" class="btn-link">ST.com</a>
<a href="search.html" class="btn-link">Search Products</a>
  `;

  mainEl.innerHTML = template;
}
