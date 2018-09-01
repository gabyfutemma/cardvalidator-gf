const mocha = require("mocha");
const chai = require("chai");
const index = require('../index');
const expect = chai.expect;

describe("index", function() {
  describe("#cardValidator", function() {

    describe("When haven't parameter", function() {
      it("should throw an error", () => {
        expect(() => index.cardValidator()).to.throw("You must enter a parameter!");
        expect(() => index.cardValidator("")).to.throw("You must enter a parameter!");
      });
    });

    describe("When number is a string", function() {
      it("should throw an error", () => {
        expect(() => index.cardValidator("hello world")).to.throw("Please insert only numbers!");
      });
    });

    describe("When number is a integer but only has one digit", function() {
      it("should throw an error", () => {
        expect(() => index.cardValidator(7)).to.throw("The value insert has only one digit, please insert your complete card number!");
      });
    });

    describe("When number is a integer and card number is valid", function() {
      it("should return true", () => {
        expect(index.cardValidator(36490102462661)).to.equal(true);
      });
    });

    describe("When number is a integer and card number is invalid", function() {
      it("should return false", () => {
        expect(index.cardValidator(1909198901234567)).to.equal(false);
      });
    });

  });
});
