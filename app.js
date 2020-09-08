function main() {
  const item_input = document.getElementById("item");
  const hours_input = document.getElementById("hours");
  const btn_button = document.getElementById("btn");

  // Add event listeners for click or enter
  hours_input.addEventListener("keydown", (event) => {
    if (event.code == "Enter" && checkIfNumber(hours_input.value)) {
      addItemToList(item_input.value, hours_input.value);
      item_input.value = "";
      hours_input.value = "";
    }
  });
  btn_button.addEventListener("click", () => {
    if (checkIfNumber(hours_input.value)) {
      addItemToList(item_input.value, hours_input.value);
      item_input.value = "";
      hours_input.value = "";
    }
  });
}

function checkIfNumber(value) {
  value = parseInt(value);
  return value <= 10 && value >= 0 ? true : false;
}

function addItemToList(itemValue, hoursValue) {
  const itemsList_ul = document.querySelector(".items-list");

  // Create container div
  const container_div = document.createElement("div");
  container_div.setAttribute("class", "item-container");
  itemsList_ul.appendChild(container_div);

  // Add item in first column
  const listItem_li = document.createElement("li");
  const textNodeItem = document.createTextNode(itemValue);
  listItem_li.appendChild(textNodeItem);
  listItem_li.setAttribute("class", "list-item");
  container_div.appendChild(listItem_li);

  // Div bullet point
  const listBullet_div = document.createElement("div");
  listBullet_div.setAttribute("class", "list-bullet");
  listItem_li.appendChild(listBullet_div);

  // Create X to remove from list
  const x_div = document.createElement("div");
  const x1_div = document.createElement("div");
  const x2_div = document.createElement("div");
  x_div.setAttribute("class", "x");
  x1_div.setAttribute("class", "x1");
  x2_div.setAttribute("class", "x2");

  // Add each x into x container and append it to listItem_li
  x_div.appendChild(x1_div);
  x_div.appendChild(x2_div);
  listItem_li.appendChild(x_div);

  // Add item in second column
  const listItem2_li = document.createElement("li");
  const textNodeHour = document.createTextNode(hoursValue);
  listItem2_li.appendChild(textNodeHour);
  listItem2_li.setAttribute("class", "list-item2");
  container_div.appendChild(listItem2_li);

  listBullet_div.addEventListener("mouseover", () =>
    showXHidBullet(listBullet_div, x1_div, x2_div)
  );

  x_div.addEventListener("mouseout", () =>
    showBulletHideX(listBullet_div, x1_div, x2_div)
  );

  x1_div.addEventListener("click", () => removeItem(x1_div, itemsList_ul));
  x2_div.addEventListener("click", () => removeItem(x1_div, itemsList_ul));
}

function showXHidBullet(listBullet_div, x1_div, x2_div) {
  listBullet_div.style.width = "0";
  x1_div.style.width = "10px";
  x2_div.style.width = "10px";
}

function showBulletHideX(listBullet_div, x1_div, x2_div) {
  listBullet_div.style.width = "6px";
  x1_div.style.width = "0";
  x2_div.style.width = "0";
}

function removeItem(x1_div, itemsList_ul) {
  const elementItem = x1_div.parentElement.parentElement.parentElement;
  itemsList_ul.removeChild(elementItem);
}

main();
