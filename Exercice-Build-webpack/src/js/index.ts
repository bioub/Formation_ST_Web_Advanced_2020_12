document.addEventListener("click", async () => {
  const { Horloge } = await import("./horloge");

  const divElt = document.querySelector<HTMLElement>(".horloge");
  const clock = new Horloge(divElt);
  clock.start();

});
