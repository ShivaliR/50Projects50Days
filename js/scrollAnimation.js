window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
      console.log(entries);
    },
    {
      root: null, //DEFAULT VALUE
      threshold: 1, //DEFAULT IS 0
      rootMargin: "100px",
    }
  );
  cards.forEach((card) => {
    observer.observe(card);
  });
});
