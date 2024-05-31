document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetID = event.target.getAttribute("href").substring(1);

          pages.forEach(page => {
              if (page.id === targetID) {
                  page.classList.add("active");
                  page.classList.remove("hidden");
              } else {
                  page.classList.remove("active");
                  page.classList.add("hidden");
              }
          });
      });
  });

  document.querySelector("#home").classList.add("active");
});
