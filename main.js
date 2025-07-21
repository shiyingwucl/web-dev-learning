const items = ["1", "2", "3"];

const listElements = document.getElementById("list");

function displayList(items, listElements) {
  const child = document.getElementsByClassName("test-child2");
  console.log(child);
  child[0].classList.add("active");
  listElements.innerHTML = "";
  for (let i = 1; i < items.length; i++) {
    let item = items[i];
    let itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerText = item;
    listElements.appendChild(itemElement);
  }
}

displayList(items, listElements);
