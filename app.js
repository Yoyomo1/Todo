function main() {
  const item_input = document.getElementById("item");
  const hours_input = document.getElementById("hours");
  const btn_button = document.getElementById("btn");

  // Add event listeners for click or enter
  item_input.addEventListener("keydown", (event) => {
    if (event.code == "Enter" && checkIfNumber(hours_input.value)) {
      addItemToList(item_input.value, hours_input.value);
    }
  });
  btn_button.addEventListener("click", () => {
    addItemToList(item_input.value, hours_input.value);
  });
}

function checkIfNumber(value) {
  return typeof value == "number" ? true : false;
}

function addItemToList(itemValue, hoursValue) {
  const itemsList_ul = document.querySelector(".items-list");
  const hoursList_ul = document.querySelector(".hours-list");

  // Add item in first column
  const listItem_li = document.createElement("li");
  const textNodeItem = document.createTextNode(itemValue);
  listItem_li.appendChild(textNodeItem);
  listItem_li.setAttribute("class", "list-item");
  itemsList_ul.appendChild(listItem_li);

  // Span element to remove items
  const close_span = document.createElement("span");
  close_span.setAttribute("class", "remove-item");
  listItem_li.appendChild(close_span);

  // Add item in second column
  const hourItem_li = document.createElement("li");
  const textNodeHour = document.createTextNode(hoursValue);
  hourItem_li.appendChild(textNodeHour);
  hourItem_li.setAttribute("class", "list-hour");
  hoursList_ul.appendChild(hourItem_li);
}

main();
