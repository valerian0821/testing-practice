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

const isUpperCase = (char) => {
  return /^[A-Z]$/.test(char);
};

const isLowerCase = (char) => {
  return /^[a-z]$/.test(char);
};

const caesarCipher = (plainText, shiftFactor) => {
  if (!plainText) {
    return "";
  }
  if (shiftFactor === 0) {
    return plainText;
  }
  let shift = shiftFactor % 26;
  const plainTextArr = plainText.split("");
  const cipherTextArr = [];
  for (let char of plainTextArr) {
    if (isUpperCase(char) || isLowerCase(char)) {
      let charCode = char.charCodeAt(0);
      let cipherCharCode = charCode + shift;
      if (isUpperCase(char) && (cipherCharCode < 65 || cipherCharCode > 90)) {
        if (cipherCharCode < 65) {
          cipherCharCode = cipherCharCode + 26;
        } else {
          cipherCharCode = cipherCharCode - 26;
        }
      } else if (
        isLowerCase(char) &&
        (cipherCharCode < 97 || cipherCharCode > 122)
      ) {
        if (cipherCharCode < 97) {
          cipherCharCode = cipherCharCode + 26;
        } else {
          cipherCharCode = cipherCharCode - 26;
        }
      }
      cipherTextArr.push(String.fromCharCode(cipherCharCode));
    } else {
      cipherTextArr.push(char);
    }
  }
  return cipherTextArr.join("");
};

const analyzeArray = (arr) => {
  if (arr.length === 0) {
    return { average: undefined, min: undefined, max: undefined, length: 0 };
  }
  let lengthVar = arr.length;
  let averageVar = arr.reduce((acc, curr) => acc + curr, 0) / lengthVar;
  let minVar = Math.min(...arr);
  let maxVar = Math.max(...arr);
  return { average: averageVar, min: minVar, max: maxVar, length: lengthVar };
};

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
