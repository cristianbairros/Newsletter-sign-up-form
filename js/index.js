const modal = document.getElementById("modal");
const fade = document.getElementById("fade");
const email = document.getElementById("email");
const emailValid = document.querySelector(".email-valid");
const botao = document.getElementById("botao");
const messageError = document.getElementById("message-error");
const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{1,3})+$/;

const returnHome = document.getElementById("return-home");
returnHome.addEventListener("click", () => {
  location.reload();
});

botao.addEventListener("click", () => {
  if (email.value === "") {
    emailInvalid();
    return;
  } else if (!regex.test(email.value)) {
    emailInvalid();
  } else {
    modal.classList.toggle("display-none");
    fade.classList.toggle("display-none");
    emailValidad();
  }
});
const emailValidad = () => {
  console.log(emailValid);
  emailValid.innerHTML = email.value;
};
const emailInvalid = () => {
  messageError.classList.remove("display-none");
  email.classList.add("email-invalid");
};
email.addEventListener("mouseup", () => {
  messageError.classList.add("display-none");
  email.classList.remove("email-invalid");
});
