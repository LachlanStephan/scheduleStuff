export const emailErrorFunc = () => {
  let email = document.getElementById("email");
  let emailError = document.getElementById("emailError");

  if (!email.value.includes("@" && ".com")) {
    emailError.innerHTML = "Please enter a valid email";
  } else {
    emailError.innerHTML = "";
  }
};

export const passwordErrorFunc = () => {
  let pass = document.getElementById("password");
  let passError = document.getElementById("passwordError");

  if (pass.value.length < 8) {
    passError.innerHTML =
      "Your password must be 8 or more characters and include 1 capital letter";
  } else {
    passError.innerHTML = "";
  }
};

export const fNameErrorFunc = () => {
  let name = document.getElementById("fName");
  let nameError = document.getElementById("fNameError");

  if (name.value.length < 2) {
    nameError.innerHTML = "Name must have a capital letter";
  } else {
    nameError.innerHTML = "";
  }
};

export const lNameErrorFunc = () => {
  let name = document.getElementById("lName");
  let nameError = document.getElementById("lNameError");

  if (name.value.length < 2) {
    nameError.innerHTML = "Name must have a capital letter";
  } else {
    nameError.innerHTML = "";
  }
};
