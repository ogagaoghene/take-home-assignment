const greatestOfThreeNumbers = (num1, num2, num3) => {
    if (num1 > num2) {
        if (num1 > num3) 
            console.log(num1, "is greater than", num2, "and", num3);
        else 
            console.log(num3, "is greater than", num1, "and", num2);
    }
    
    if (num2 > num1) {
        if (num2 > num3)
            console.log(num2, "is greater than", num1, "and", num3);
        else 
            console.log(num3, "is greater than", num1, "and", num2);
    }
    
    if (num1 == num2 ) {
        if (num2 == num3)
            console.log("The three numbers are equal");
    }
}

const largestOfThreeNumbers = (function(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3)
        console.log(num1, "is greater than", num2, "and", num3);
    else if (num2 >= num1 && num2 >= num3) {
        console.log(num2, "is greater than", num1, "and", num3);
    }
    else if (num3 >= num1 && num3 >= num2) {
        console.log(num3, "is greater than", num1, "and", num2);
    }
    else {
        console.log("The three numbers are equal");
    }
})(13,45,23);

greatestOfThreeNumbers(10,23,45);
largestOfThreeNumbers;