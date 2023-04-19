const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
