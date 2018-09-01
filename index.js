module.exports.cardValidator = function cardValidator(cardnumber) {
  if (cardnumber === undefined || cardnumber === "") {
    throw new RangeError("You must enter a parameter!");
  }
  if (typeof cardnumber !== "number") {
    throw new TypeError("Please insert only numbers!");
  }
  if (parseInt(cardnumber) && cardnumber.toString().length === 1) {
    throw new RangeError("The value insert has only one digit, please insert your complete card number!");
  }

  let numReverse = cardnumber.toString().split("").reverse().map(Number);
  let numOperations = numReverse.map((num, i) => {
    if (i % 2 === 1) {
      return (num * 2 <= 9 ) ? num * 2 : num * 2 - 9;
    } else {
      return num;
    }
  });

  let result = numOperations.reduce((acum, num) => acum + num);

  return (result % 10 === 0) ? true : false;
};
