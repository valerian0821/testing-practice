const capitalize = (str) => {
  if (!str) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  if (!str) {
    return "";
  }
  return str.split("").reverse().join("");
};

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  mulitply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

const caesarCipher = () => {

};

export { capitalize, reverseString, Calculator, caesarCipher };
