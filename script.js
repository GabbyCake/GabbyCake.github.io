document.addEventListener("DOMContentLoaded", function() {
  const icon = document.querySelector(".icon");
  const nav = document.querySelector(".navbar");
  const body = document.body;
  const initialsLink = document.querySelector(".initials");

  icon.addEventListener("click", function() {
    nav.classList.toggle("responsive");
    changeIcon();
    if (nav.classList.contains("responsive")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

  // Add an event listener to the "initials" link
  initialsLink.addEventListener("click", function() {
    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive"); // Close the responsive menu
      body.classList.remove("no-scroll"); // Remove the "no-scroll" class
      changeIcon(); // Change the icon back to bars
    }
  });

  const navLinks = document.querySelectorAll(".navlink a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      nav.classList.remove("responsive");
      changeIcon();
      body.classList.remove("no-scroll");
    });
  });

  function changeIcon() {
    const iconElement = icon.querySelector("i");
    if (iconElement) {
      iconElement.classList.toggle('fa-bars');
      iconElement.classList.toggle('fa-times');
    } else {
      console.error("Icon element not found.");
    }
  }
});
