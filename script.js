// Evento para o submit do formulário (validação e cálculo)
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let hasError = false;

  // Validação dos campos de entrada
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

  // Validação dos botões de rádio
  let radioGroup = document.querySelector(".radio-group");
  if (radioGroup) {
    let radioButtons = radioGroup.querySelectorAll("input[type='radio']");
    let radioError = radioGroup.querySelector(".error-message");
    let isChecked = Array.from(radioButtons).some(radio => radio.checked);
  
    if (!isChecked) {
      radioError.style.display = "block";
      hasError = true;
    } else {
      radioError.style.display = "none";
    }
  }

  if (!hasError) {
    console.log("Formulário válido! Submetendo...");

    // Cálculo da hipoteca
    let mortgageAmount = parseFloat(document.getElementById("mortgage-amount").value);
    let mortgageTerm = parseFloat(document.getElementById("mortgage-term").value);
    let interestRate = parseFloat(document.getElementById("interest-rate").value);

    let monthlyInterestRate = (interestRate / 100) / 12;
    let numberOfPayments = mortgageTerm * 12;

    let monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    let totalRepayment = monthlyPayment * numberOfPayments;

    monthlyPayment = monthlyPayment.toFixed(2);
    totalRepayment = totalRepayment.toFixed(2);

    // Atualiza a área de resultados
    let imgContainer = document.querySelector(".img-container");
    imgContainer.innerHTML = `
      <div class="result">
        <div class="top-text">
          <h5>Your results</h5>
          <h3>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</h3>
        </div>
        <div class="Calculation-Results">
          <strong>Your monthly repayments:</strong>
          <h4>£${monthlyPayment}</h4>
          <hr>
          <strong>Total you’ll repay over the term:</strong>
          <h5>£${totalRepayment}</h5>
        </div>
      </div>
    `;
  }
});

// Evento para o botão Clear All (definido fora do submit)
document.querySelector(".clear-all-btn").addEventListener("click", function() {
  // Reseta o formulário
  document.querySelector("form").reset();
  
  // Remove as mensagens de erro e restaura os estilos dos inputs e spans
  document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");
  document.querySelectorAll(".input-wrapper input").forEach(input => input.style.borderColor = "");
  document.querySelectorAll(".input-label").forEach(span => {
    span.style.backgroundColor = "";
    span.style.color = "";
  });
  
  // Restaura o conteúdo original da área de resultados
  const imgContainer = document.querySelector(".img-container");
  imgContainer.innerHTML = `
    <img src="assets/images/illustration-empty.svg" alt="Image-calculator">
    <div class="text-area">
      <h2>Results shown here</h2>
      <h3>Complete the form and click “calculate repayments” to see your monthly repayments.</h3>
    </div>
  `;
});
