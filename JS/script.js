function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemp;

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            outputTemp = (inputTemp * 9/5) + 32;
        } else if (outputUnit === "kelvin") {
            outputTemp = inputTemp + 273.15;
        } else {
            outputTemp = inputTemp;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            outputTemp = (inputTemp - 32) * 5/9;
        } else if (outputUnit === "kelvin") {
            outputTemp = (inputTemp - 32) * 5/9 + 273.15;
        } else {
            outputTemp = inputTemp;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            outputTemp = inputTemp - 273.15;
        } else if (outputUnit === "fahrenheit") {
            outputTemp = (inputTemp - 273.15) * 9/5 + 32;
        } else {
            outputTemp = inputTemp;
        }
    }

    document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}

function resetFields() {
    document.getElementById("inputTemp").value = '';
    document.getElementById("outputTemp").value = '';
    document.getElementById("inputUnit").value = 'celsius';
    document.getElementById("outputUnit").value = 'celsius';
}
function reverseFields() {
    var inputTemp = document.getElementById("inputTemp").value;
    var outputTemp = document.getElementById("outputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    document.getElementById("inputTemp").value = outputTemp;
    document.getElementById("outputTemp").value = inputTemp;
    document.getElementById("inputUnit").value = outputUnit;
    document.getElementById("outputUnit").value = inputUnit;
}