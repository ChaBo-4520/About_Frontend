"use strict";

// Fetch the items from the JSON file
function loadItems() {
  // response의 body에 json이 있다.
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHtmlString(item)).join("");
}

function createHtmlString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
    <span class="item_description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  // 이벤트 위임을 통해 각각의 button에 이벤트를 달지 않고 부모에게 이벤트를 걸어
  // 아래 까지 전달 되도록 한다.
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
