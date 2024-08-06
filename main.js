document.addEventListener("DOMContentLoaded", () => {
	var numberInput = [-1, 'x', 5];
	var numberOutput=[0,'x',-5]
	var markedInput = Array(numberInput.length).fill(false); // Array to keep track of marked buttons
	var markedOutput= Array(numberOutput.length).fill(false);

  const buttonElementInput = document.getElementById("output-button");
  const buttonContainerInput = document.getElementById("button-container");
  const buttonElementOutput = document.getElementById("output-buttonOutput");
	const buttonContainerOutput = document.getElementById("button-containerOutput");
	const makeButton = document.getElementById("make");

	
	
  // Function to update the array of buttons
  function updateButtonArray(buttonContainer,number) {
    // Remove existing dynamic buttons
    buttonContainer.innerHTML = '';
makeButton.addEventListener("click", () => {
	if (markedInput[i]) {
		numberOutput[i] = parseInt(numberInput[i]) + parseInt( numberOutput[i]);
		  }
	  })
    // Add new dynamic buttons based on number1 values
    for (let i = 0; i < number.length; i++) {
      const newButton = document.createElement("button");
      newButton.className = "dynamic-button";
      newButton.textContent = `${number[i]}`;

      // Set initial button color based on marked array
      if (markedInput[i]) {
        newButton.style.backgroundColor = 'red';
      } else {
        newButton.style.backgroundColor = 'white';
      }

      newButton.addEventListener("click", () => {
        // Toggle marked status and button color
        markedInput[i] = !markedInput[i];
        if (markedInput[i]) {
          newButton.style.backgroundColor = 'red';
        } else {
          newButton.style.backgroundColor = 'white';
        }
      });

      buttonContainer.appendChild(newButton);
	  }
	  

  }

 



  // Initial call to populate the buttons
	updateButtonArray(buttonContainerOutput, numberOutput);
	updateButtonArray(buttonContainerInput, numberInput);
});
