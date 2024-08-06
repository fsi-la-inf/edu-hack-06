document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("number-input");
    const submitButton = document.getElementById("submit-button");
    let number;

    submitButton.addEventListener("click", () => {
        const inputValue = inputElement.value;
        number = parseFloat(inputValue);
        console.log(number);
        if (!isNaN(number)) {
            console.log("Number stored in variable:", number);
        } else {
            console.log("Please enter a valid number.");
        }
    });
});
