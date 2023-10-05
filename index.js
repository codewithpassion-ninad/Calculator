var display = document.getElementById("display");
var currentInput = "";

function addToDisplay(value)
{
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay()
{
    currentInput = "";
    display.value = "";
}

function calculateResult()
{
    try
    {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    }
    catch (error)
    {
        display.value = "Error";
    }
}
