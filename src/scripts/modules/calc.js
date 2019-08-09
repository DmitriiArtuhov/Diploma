const calc = (mainContainerSelector, optionsParentSelector, radioBtnParentSelector, outputSelector) => {

  let optionsParent = document.querySelector(optionsParentSelector);
  let mainContainer = document.querySelector(mainContainerSelector);
  let radioBtnParent = document.querySelector(radioBtnParentSelector);
  let output = document.querySelector(outputSelector);

  // variables for formula
  let customersAmount = parseInt(optionsParent[optionsParent.selectedIndex].value),
    term = 3,
    x,
    result = 3000;

  mainContainer.addEventListener('change', (e) => {

    customersAmount = parseInt(optionsParent[optionsParent.selectedIndex].value); // количество пользователей

    radioBtnParent.childNodes.forEach((item) => {
      if (item.checked) {
        term = parseInt(item.value); // сроки в днях (цифрой) 
      }
    });

    if (customersAmount === 1) {
      result = customersAmount * term * 1000;
      if(term === 12) {
        result = customersAmount * term * 1000;
        result -= result * 10 / 100;
      }
    } else if(customersAmount === 2) {
      x = 19/20;
      result = customersAmount * term * 1000 * x;
      if (term === 12) {
        result = customersAmount * term * 1000 * x;
        result -= result * 10 / 100;
      }
    } else if(customersAmount === 3) {
      x = 0.9;
      result = customersAmount * term * 1000 * x;
      if (term === 12) {
        result = customersAmount * term * 1000 * x;
        result -= result * 10 / 100;
      }
    } else if(customersAmount === 5) {
      x = 0.9;
      result = customersAmount * term * 1000 * x;
      if (term === 12) {
        result = customersAmount * term * 1000 * x;
        result -= result * 10 / 100;
      }
    } else if(customersAmount === 7) {
      x = 6/7;
      result = customersAmount * term * 1000 * x;
      if (term === 12) {
        result = customersAmount * term * 1000 * x;
        result -= result * 10 / 100;
      }
    } else if(customersAmount === 10) {
      x = 0.8;
      result = customersAmount * term * 1000 * x;
      if (term === 12) {
        result = customersAmount * term * 1000 * x;
        result -= result * 10 / 100;
      }
    } else if(isNaN(customersAmount)) {
      x = 1;
      result = 10 * term * 1000 * x;
      if (term === 12) {
        result = 10 * term * 1000 * x;
        result -= result * 10 / 100;
      }
    }

    output.textContent = result;
  });

}

export default calc;