import DataError from "../models/dataError.js";

export default class ValidatiorBase {
  constructor() {
    this.rules = [];
    this.errors = [];
  }
  Validate(object) {
    this.object = object;
    for (const rule of this.rules) {
      if (rule.rule(this.object[rule.field])) {
        this.errors.push(new DataError(rule.message, object));
      }
    }
    if (this.errors.length > 0)
      return { ruleResult: false, errors: this.errors };
    return { ruleResult: true };
  }
  RuleFor(fieldName) {
    this.fieldName = fieldName;
    return this;
  }
  AddRule(rule) {
    this.rule = {
      field: this.fieldName,
      rule: rule,
    };
    this.rules.push(this.rule);
  }
  HasField() {
    this.AddRule((field) => !field);
    return this;
  }
  MaxValue(value) {
    this.AddRule((field) => field > value);
    return this;
  }
  MinValue(value) {
    this.AddRule((field) => field < value);
    return this;
  }
  IsNumber() {
    this.AddRule((field) => Number.isNaN(Number.parseInt(field)));
    return this;
  }
  WithMessage(message) {
    this.rule.message = message;
    return this;
  }
}
