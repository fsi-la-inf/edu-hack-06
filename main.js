document.addEventListener("DOMContentLoaded", () => {
	var numberInput = [-1, 'x+', 20];
	var numberOutput = [0, 'x+', -7];

	var markedInput = Array(numberInput.length).fill(false); // Array to keep track of marked buttons
	var markedOutput = Array(numberOutput.length).fill(false);

	const buttonContainerInput = document.getElementById("button-container");
	const buttonContainerOutput = document.getElementById("button-containerOutput");
	const makeButton = document.getElementById("make");
	const mI = document.getElementById("mI");
	const tI = document.getElementById("tI");
	const mO = document.getElementById("mO");
	const tO = document.getElementById("tO");
	const submitButton = document.getElementById("submit-button");
	submitButton.addEventListener("click", () => {
		numberInput[0] = parseFloat(mI.value);
		numberInput[2] = parseFloat(tI.value);
		numberOutput[0] = parseFloat(mO.value);
		numberOutput[2] = parseFloat(tO.value);
		console.log(numberInput);
		updateButtonArray();
	});

	// Function to update the array of buttons
	function updateButtonArray() {
		buttonContainerInput.innerHTML = '';
		// Add new dynamic buttons based on number1 values
		for (let i = 0; i < numberInput.length; i++) {
			const newButton = document.createElement("button");
			newButton.className = "dynamic-button";
			newButton.textContent = `${numberInput[i]}`;

			// Set initial button color based on marked array
			if (markedInput[i] && i != 1) {
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

			buttonContainerInput.appendChild(newButton);

		}


		buttonContainerOutput.innerHTML = '';
		// Add new dynamic buttons based on number1 values
		for (let i = 0; i < numberOutput.length; i++) {
			const newButton = document.createElement("button");
			newButton.className = "dynamic-button";
			newButton.textContent = `${numberOutput[i]}`;

			// Set initial button color based on marked array
			if (markedOutput[i] && i != 1) {
				newButton.style.backgroundColor = 'red';
			} else {
				newButton.style.backgroundColor = 'white';
			}

			newButton.addEventListener("click", () => {
				// Toggle marked status and button color
				markedOutput[i] = !markedOutput[i];
				if (markedOutput[i]) {
					newButton.style.backgroundColor = 'red';
				} else {
					newButton.style.backgroundColor = 'white';
				}
			});

			buttonContainerOutput.appendChild(newButton);

		}



	}



	function updateMake() {
		makeButton.addEventListener("click", () => {

			if (markedInput[2]) {
				numberOutput[2] = parseFloat(numberOutput[2]) - parseFloat(numberInput[2]);
				numberInput[2] = 0;
				markedInput[2] = false;
				markedOutput[2] = false;
			}
			if (markedOutput[2]) {
				numberInput[2] = parseFloat(numberInput[2]) - parseFloat(numberOutput[2]);
				numberOutput[2] = 0;
				markedInput[2] = false;
				markedOutput[2] = false;
			}



			if (markedInput[0] && parseFloat(numberInput[0]) != 0) {
				numberOutput[0] = parseFloat(numberOutput[0]) / parseFloat(numberInput[0]);
				numberOutput[2] = parseFloat(numberOutput[2]) / parseFloat(numberInput[0]);
				numberInput[2] = parseFloat(numberInput[2]) / parseFloat(numberInput[0]);
				numberInput[0] = parseFloat(numberInput[0]) / parseFloat(numberInput[0]);
				markedInput[0] = false;
				markedOutput[0] = false;
			}
			if (markedOutput[0] && parseFloat(numberOutput[0]) != 0) {

				numberOutput[2] = parseFloat(numberOutput[2]) / parseFloat(numberOutput[0]);
				numberInput[2] = parseFloat(numberInput[2]) / parseFloat(numberOutput[0]);
				numberInput[0] = parseFloat(numberInput[0]) / parseFloat(numberOutput[0]);
				numberOutput[0] = parseFloat(numberOutput[0]) / parseFloat(numberOutput[0]);
				markedInput[0] = false;
				markedOutput[0] = false;
			}




			updateButtonArray();


		}
		)

	}





	// Initial call to populate the buttons
	updateMake();
	updateButtonArray();

});



