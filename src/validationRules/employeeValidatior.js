import ValidatiorBase from "./validatiorBase.js";

export default class EmployeeValidatior extends ValidatiorBase {
  constructor() {
    super();
    super
      .RuleFor(x=>x.salary)
      .HasField()
      .WithMessage("Validation problem. salary is required");
  }
}
