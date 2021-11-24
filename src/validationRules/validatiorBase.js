import DataError from "../models/dataError.js";

export default class ValidatiorBase {
  constructor() {
    this.rules = [];
    this.errors = [];
  }
  Validate(object) {
    for (const rule of this.rules.filter(r=>r.when(object))) {
      if (rule.rule(rule.field(object))) {
        this.errors.push(new DataError(rule.message, object));
      }
    }
    if (this.errors.length > 0)
      return { ruleResult: false, errors: this.errors };
    return { ruleResult: true };
  }
  RuleFor(field) {
    this.field = field;
    return this;
  }
  AddRule(rule) {
    this.rule = {
      field: this.field,
      rule: rule,
      when:()=>true
    };
    this.rules.push(this.rule);
    return this;
  }
  When(when){
    this.rule.when=(object)=>when(object)
    return this;
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
    this.AddRule((field) => Number.isNaN(+field));
    return this;
  }
  WithMessage(message) {
    this.rule.message = message;
    return this;
  }
}
