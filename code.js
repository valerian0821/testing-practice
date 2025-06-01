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

export { capitalize, reverseString };
