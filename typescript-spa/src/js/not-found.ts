export function notFound(mainEl: HTMLElement): void {
  const template = `
<p>Page not found</p>
  `;

  mainEl.innerHTML = template;
}
