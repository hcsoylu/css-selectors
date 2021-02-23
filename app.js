function addNewLink() {
  let newLi = document.createElement("a");
  newLi.innerHTML = "I am new one";
  newLi.href = "https://www.google.com.tr/";
  let nav = document.querySelector("nav.d-flex");
  nav.appendChild(newLi);
}

function mainTitle() {
  let mainTitle = document.querySelector("h1");
  mainTitle.style.color = "white";
}

function postHeadings() {
  let postHeadings = document.querySelector(".row.mb-2");
}

function jumbo() {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.classList.remove("bg-dark");
  jumbo.style.background = "pink";
}

function elseWhere() {
  let elseWhere = document.querySelector("aside div:nth-child(3)>ol");
  elseWhere.innerHTML = "";
}

function search() {
  let search = document.querySelector("svg");
  search.innerHTML = "";
}
