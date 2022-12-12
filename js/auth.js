//getting all input tags
const inputs = document.querySelectorAll(".pin-field input");
//error msg holder
const errMsg = document.getElementById("errMsg");

//accessing each input field
inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("keyup", handlePin);
});

//function for handling Pin
function handlePin(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (value.length > 0 && fieldIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  if (e.key == "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }
  if (fieldIndex == inputs.length - 1) {
    submit();
  }
}

//function for submit
function submit() {
  console.log("submitting...");
  //entered Pin
  const auth = 0000;
  let pin = "";
  inputs.forEach((input) => {
    pin += input.value;
  });
  console.log(pin);
  if (auth == pin) {
    console.log("correct");
    inputs.forEach((input) => {
      input.disabled = true;
      input.classList.add("disabled");
    });
    errMsg.textContent = "Access Granted";
    errMsg.innerText = "Access Granted";
    errMsg.style.color = "green";
    window.location.href = "skyzone.html";
  } else {
    errMsg.textContent = "Wrong Pin!";
    errMsg.innerText = "Wrong Pin!";
    errMsg.style.color = "red";
  }
}
