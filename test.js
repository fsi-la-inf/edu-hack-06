document.addEventListener("DOMContentLoaded", () => {
    const mI = document.getElementById("mI");
    const tI = document.getElementById("tI");
    const mO = document.getElementById("mO");
    const tO = document.getElementById("tO");
    const submitButton = document.getElementById("submit-button");
    let number;
    var numberInput = [-1, 'x+', 20];
    var numberOutput = [0, 'x+', -7];
    submitButton.addEventListener("click", () => {
        numberInput[0] = parseInt(mI.value);
        numberInput[2] = parseInt(tI.value);
        numberOutput[0] = parseInt(mO.value);
        numberOutput[2] = parseInt(tI.value);
        console.log(numberInput)
    });
});
