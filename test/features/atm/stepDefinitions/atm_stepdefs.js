const assert = require("assert");
const { Before, Given, When, Then } = require("@cucumber/cucumber");
const Bank = require("../../../../src/atm/bank");
const ATM = require("../../../../src/atm/ATM");
const Customer = require("../../../../src/atm/customer");

Before({ tags: "@atm" }, function () {
  this.bank = new Bank();
  this.atm = new ATM(this.bank);
});
