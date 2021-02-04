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

  if (pass.value.length <= 5) {
    passError.innerHTML = "Your password must be more than 5 characters";
  } else {
    passError.innerHTML = "";
  }
};

export const fNameErrorFunc = () => {
  let name = document.getElementById("fName");
  let nameError = document.getElementById("fNameError");

  if (name.value.length <= 2) {
    nameError.innerHTML = "Please enter a name";
  } else {
    nameError.innerHTML = "";
  }
};
