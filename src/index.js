function checkOneDigit(char) {
    let digit = '';

    if(char == '1') {
        digit = "one";  
    } else if(char == '2') {
        digit = "two";
    } else if(char == '3') {
        digit = "three";
    } else if(char == '4') {
        digit = "four";
    } else if(char == '5') {
        digit = "five";
    } else if(char == '6') {
        digit = "six";
    } else if(char == '7') {
        digit = "seven";
    } else if(char == '8') {
        digit = "eight";
    } else if(char == '9') {
        digit = "nine";
    } else if(char == '0') {
        digit = ""
    }
    return digit;
}

function checkTwoDigits(char) {
    let digit = '';

    if(char == '2') {
        digit = "twenty";
    } else if(char == '3') {
        digit = "thirty";
    } else if(char == '4') {
        digit = "forty";
    } else if(char == '5') {
        digit = "fifty";
    } else if(char == '6') {
        digit = "sixty";
    } else if(char == '7') {
        digit = "seventy";
    } else if(char == '8') {
        digit = "eighty";
    } else if(char == '9') {
        digit = "ninety";
    } else if(char == '0') {
        digit = ""
    }
    return digit;
}

function checkDigitsTill20(char) {
    let digit = '';

    if(char == '0') {
        digit = "ten";  
    } else if(char == '1') {
        digit = "eleven";  
    } else if(char == '2') {
        digit = "twelve";
    } else if(char == '3') {
        digit = "thirteen"
    } else if(char == '4') {
        digit = "fourteen";
    } else if(char == '5') {
        digit = "fifteen";
    } else if(char == '6') {
        digit = "sixteen";
    } else if(char == '7') {
        digit = "seventeen";
    } else if(char == '8') {
        digit = "eighteen";
    } else if(char == '9') {
        digit = "nineteen";
    }
    return digit; 
}

module.exports = function toReadable (number) {

    const textNumber = String(number);
    const length = textNumber.length;
    let result = '';

    if (length == 3 && textNumber.charAt(1) == '1') {
        result = checkOneDigit(textNumber.charAt(0)) + ' hundred' + ' ' + checkDigitsTill20(textNumber.charAt(2));
    } else if (length == 3 && textNumber.charAt(1) !== '1'&& textNumber.charAt(1) !== '0' && textNumber.charAt(2) == '0') {
        result = checkOneDigit(textNumber.charAt(0)) + ' hundred' + ' ' + checkTwoDigits(textNumber.charAt(1));
    } else if (length == 3 && textNumber.charAt(1) !== '1' && textNumber.charAt(1) !== '0'  && textNumber.charAt(2) !== '0') {
        result = checkOneDigit(textNumber.charAt(0)) + ' hundred' + ' ' + checkTwoDigits(textNumber.charAt(1)) + ' ' + checkOneDigit(textNumber.charAt(2));
    } else if (length == 3 && textNumber.charAt(1) !== '1'  && textNumber.charAt(1) == '0'  && textNumber.charAt(2) !== '0') {
        result = checkOneDigit(textNumber.charAt(0)) + ' hundred' + ' ' + checkOneDigit(textNumber.charAt(2));
    } else if (length == 3 && textNumber.charAt(1) !== '1'  && textNumber.charAt(1) == '0' && textNumber.charAt(2) == '0') {
        result = checkOneDigit(textNumber.charAt(0)) + ' hundred'; 
    } else if (length == 2 && textNumber.charAt(0) == '1') {
        result = checkDigitsTill20(textNumber.charAt(1));
    } else if (length == 2 && textNumber.charAt(0) !== '1' && textNumber.charAt(1) == '0') {
        result = checkTwoDigits(textNumber.charAt(0));
    } else if (length == 2 && textNumber.charAt(0) !== '1') {
        result = checkTwoDigits(textNumber.charAt(0)) + ' ' + checkOneDigit(textNumber.charAt(1));
    } else if (length == 1 && textNumber.charAt(0) == '0') {
        result = 'zero';
    }  else if (length == 1 && textNumber.charAt(0) !== '0') {
        result = checkOneDigit(textNumber.charAt(0));
    }
  return result;
}
