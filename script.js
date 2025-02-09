document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let hasError = false;

  // inputs number
  document.querySelectorAll(".input-wrapper").forEach(wrapper => {
    let input = wrapper.querySelector("input");
    let errorMessage = wrapper.querySelector(".error-message");

    if (input.value.trim() === "") {
      errorMessage.style.display = "block";
      hasError = true;
    } else {
      errorMessage.style.display = "none";
    }
  });

  // radio buttons
  let radioGroup = document.querySelector(".radio-group");
  let radioButtons = radioGroup.querySelectorAll("input[type='radio']");
  let radioError = radioGroup.querySelector(".error-message");

  let isChecked = Array.from(radioButtons).some(radio => radio.checked);

  if (!isChecked) {
    radioError.style.display = "block";
    hasError = true;
  } else {
    radioError.style.display = "none";
  }

  if (!hasError) {
    console.log("Formulário válido! Submetendo...");
  }
});
