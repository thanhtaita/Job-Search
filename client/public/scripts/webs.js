const renderWebs = async () => {
  const response = await fetch("/webs");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((web) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${web.image})`;

      const name = document.createElement("h3");
      name.textContent = web.name;
      bottomContainer.appendChild(name);

      const description = document.createElement("p");
      description.textContent = "-Description: " + web.description;
      bottomContainer.appendChild(description);

      const ceo = document.createElement("p");
      ceo.textContent = "-CEO: " + web.ceo;
      bottomContainer.appendChild(ceo);

      const hq = document.createElement("p");
      hq.textContent = "-Headquarters: " + web.headquarters;
      bottomContainer.appendChild(hq);

      const link = document.createElement("a");
      link.classList.add("readmore");
      link.textContent = "Read More";
      link.setAttribute("role", "button");
      link.href = `/webs/${web.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Webs Available 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderWebs();
}
