//03.17.01_Abe List of Items here
function addItem() {
  let textInput = document.getElementById('newItemText').value;
  let third = document.createElement("li");
  third.appendChild(document.createTextNode(textInput));
  document.getElementById("items").appendChild(third);
  document.getElementById("newItemText").value = '';
}