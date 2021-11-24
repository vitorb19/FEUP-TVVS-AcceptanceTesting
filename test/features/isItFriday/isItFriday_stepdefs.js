const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const app = require("../../../src/isItFriday/isItFriday");

Given("today is Monday", function () {
  this.today = "Monday";
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = app.isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
