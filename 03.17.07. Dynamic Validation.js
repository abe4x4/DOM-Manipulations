
function validate() {
  let emailToTest = document.getElementById("email");
  console.log(emailToTest);
  const regex = /([a-z]+)\@([a-z]+)\.([a-z]+)/gm;
  emailToTest.addEventListener('keydown', function(eventKeyDown){
    if (eventKeyDown.code === 13){
      let emailIsValid = regex.test(emailToTest.value);
      console.log("the regex results are " + emailIsValid);
      if (emailIsValid == false){
        emailToTest.className = "error";
      }else {
        emailToTest.className = "";
      }
    }
  });
}