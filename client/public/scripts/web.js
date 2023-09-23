const renderWeb = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/webs");
  const data = await response.json();

  const webContent = document.getElementById("web-content");

  let web;

  web = data.find((web) => web.id === requestedID);

  if (web) {
    document.getElementById("image").src = web.image;
    document.getElementById("name").textContent = web.name;
    document.getElementById("description").textContent = web.description;
    document.getElementById("ceo").textContent = web.ceo;
    document.getElementById("headquarters").textContent = web.headquarters;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Websites Available 😞";
    webContent.appendChild(message);
  }
};

renderWeb();
