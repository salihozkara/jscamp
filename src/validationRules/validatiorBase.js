import DataError from "../models/dataError.js";

export default class ValidatiorBase {
  constructor() {
    this.rules = [];
    this.errors = [];
    this.ruleIndex = -1;
  }
  Validate(object) {
    this.object = object;
    for (const rule of this.rules) {
      if (rule.rule.call()) {
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
  HasField() {
    this.ruleIndex++;
    this.rules.push({ rule: () => !this.object[this.fieldName] });
    return this;
  }
  MaxValue(value) {
    this.ruleIndex++;
    this.rules.push({ rule: () => this.object[this.fieldName] > value });
    return this;
  }
  MinValue(value) {
    this.ruleIndex++;
    this.rules.push({ rule: () => this.object[this.fieldName] < value });
    return this;
  }
  WithMessage(message) {
    this.rules[this.ruleIndex].message = message;
    return this;
  }
}
