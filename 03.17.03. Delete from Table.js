console.log("ppre script to see that it is running")
//03.17.03. Abe Delete from Table
function deleteByEmail() {
  let emailToDelete1 = document.getElementsByName("email")[0];
  let emailToDelete = emailToDelete1.value;
  let resultsDiv = document. getElementById("result");
  let theTable = document.getElementById("customers");
  let theRows = theTable.getElementsByTagName("tr");
for (i=0; i< theRows.length; i++){
  //console.log(theRows[i].cells[1].innerText);
  let anEmail = theRows[i].cells[1].innerText//theRows[i].cells[1].insertAdjacentText;
  if (anEmail == emailToDelete){
    document.getElementById("customers").deleteRow(i);
    resultsDiv.innerText= "Deleted!";
    break;
  } else {
    console.log("no match")
      resultsDiv.innerText = "Not found";
  }
}
}