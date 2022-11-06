const inputEl = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");
const onInputEntering = (event) => {
  if (event.currentTarget.value.trim() !== "") {
    spanEL.textContent = event.currentTarget.value;
  } else {
    spanEL.textContent = "Anonymous";
  }
};
inputEl.addEventListener("input", onInputEntering);