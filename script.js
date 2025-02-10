document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let hasError = false;

  // modificacoes no input-wrapper
  document.querySelectorAll(".input-wrapper").forEach(wrapper => {
    let input = wrapper.querySelector("input");
    let errorMessage = wrapper.querySelector(".error-message");
    let spanLabel = wrapper.querySelector(".input-label");

    if (input.value.trim() === "") {
      errorMessage.style.display = "block";
      spanLabel.style.backgroundColor = "red";
      spanLabel.style.color = "white";
      input.style.borderColor = "red";
      hasError = true;
    } else {
      errorMessage.style.display = "none";

      // Aqui remove os estilos do span caso não haja erro
      spanLabel.style.backgroundColor = "";
      spanLabel.style.color = "";
      input.style.borderColor = "";
    }
  });

  / botões de rádio
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

// Calculadora
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let hasError = false;

  document.querySelectorAll(".input-wrapper").forEach(wrapper => {
    let input = wrapper.querySelector("input");
    let errorMessage = wrapper.querySelector(".error-message");
    let spanLabel = wrapper.querySelector(".input-label");

    if (input.value.trim() === "") {
      errorMessage.style.display = "block";
      spanLabel.style.backgroundColor = "red";
      spanLabel.style.color = "white";
      input.style.borderColor = "red"; 
      hasError = true;
    } else {
      errorMessage.style.display = "none";
      spanLabel.style.backgroundColor = "";
      spanLabel.style.color = "";
      input.style.borderColor = "";
    }
  });

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
    
    let mortgageAmount = parseFloat(document.getElementById("mortgage-amount").value);
    let mortgageTerm = parseFloat(document.getElementById("mortgage-term").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value);

    let monthlyInterestRate = (interestRate / 100) / 12;
    let numberOfPayments = mortgageTerm * 12;

    let monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    let totalRepayment = monthlyPayment * numberOfPayments;

    monthlyPayment = monthlyPayment.toFixed(2);
    totalRepayment = totalRepayment.toFixed(2);

    let imgContainer = document.querySelector(".img-container");
    imgContainer.innerHTML = `
    <div class="result">
      <div class="top-text">
      <h2>Your results</h2>
        <h3>Your results are shown belos based on the information you provided. To adjust the results, edits the form and click “calculate repayments” again.</h3>
      </div>
      <div class="Calculation-Results">
        <strong>Your monthly repayments:</strong>
        <h4>£${monthlyPayment}</h4>
          <hr>
        <strong>Total you’ll repay over the term:</strong>
        <h2>£${totalRepayment}</h2>
      </div>
    </div>
    `;
  }
});
