const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Career Websites";
headerTitle.addEventListener("click", function () {
  // Redirect to the root of your website ("/")
  window.location.href = "/";
});

headerContainer.appendChild(headerTitle);

header.appendChild(headerContainer);
