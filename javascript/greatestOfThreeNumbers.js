const greatestOfNumbers = (num1, num2, num3) => {
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

greatestOfNumbers(13,10,12);