document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  /* VIEW OF FEATURED SECTION */
  // The view can be changed from tiles to list or the other way around
  body.querySelector(".display-options").addEventListener("click", function(e) {
    if (e.target.matches("button, button *")) {
      e.stopPropagation();
      const btn = e.target.matches("button") ? e.target : e.target.closest("button");
      const viewValue = btn.getAttribute("data-option");
      setFeaturedView(viewValue);
      btn.classList.add("active");
    }
  });

  function setFeaturedView(viewValue) {
    body.classList.remove("fixed", "responsive");
    body.classList.add(viewValue);

    body.querySelectorAll(".display-options button").forEach(btn => {
      btn.classList.remove("active");
    });
  }
});
