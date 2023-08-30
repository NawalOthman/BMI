
weight = input("Please, enter the weight in KG: ")
height = input("Please, enter the height in Meter: ")
def calculate_bmi (weight, height):
     BMI = float(weight)/ (float(height) * float(height))
     return interpret_bmi(BMI)


def interpret_bmi(BMI):
    if BMI < 18.5 :
        print("Underweight")
    elif BMI >= 18.5 and BMI <= 25 :
        print("Normal weight")
    elif BMI > 25 and BMI <= 30 :
        print("Overweight")
    else:
        print("Obese")
    

print(calculate_bmi(weight, height))


