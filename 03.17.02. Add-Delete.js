//03.17.02. Abe Add Delete
function addItem() {
  const items = document.getElementById("items");
  const value = document.getElementById("newText").value;
  let newItems = document.createElement("li");
  newItems.innerText = value + " ";
  let deleteLink = document.createElement("a");
  deleteLink.innerText = `[Delete]`;
  deleteLink.href = "#";
  deleteLink.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentNode.parentNode.removeChild(this.parentNode);
  })
  newItems.appendChild(deleteLink);
  items.appendChild(newItems);
  document.getElementById("newText").value = "";
  }