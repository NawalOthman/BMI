weight = prompt("Please, enter the weight in KG: ")
height = prompt("Please, enter the height in Meter: ")
var BMI;

function calculate_bmi (weight, height)
{
    BMI = weight/ (height * height)
    return interpret_bmi(BMI)
}


function interpret_bmi(BMI)
{
    if (BMI < 18.5 )
        console.log("Underweight")
    else if (BMI >= 18.5 && BMI <= 25)
        console.log("Normal weight")
    else if (BMI > 25 && BMI <= 30)
        console.log("Overweight")
    else
        console.log("Obese")
}


console.log(calculate_bmi(weight, height))
