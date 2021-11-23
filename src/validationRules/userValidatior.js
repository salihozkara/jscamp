import ValidatiorBase from "./validatiorBase.js";
//id firstName lastName age city
export default class UserValidatior extends ValidatiorBase {
  constructor() {
    super();
    super
      .RuleFor("id")
      .HasField()
      .WithMessage("Validation problem. id is required");
    super
      .RuleFor("firstName")
      .HasField()
      .WithMessage("Validation problem. firstName is required");
    super
      .RuleFor("lastName")
      .HasField()
      .WithMessage("Validation problem. lastName is required");
    super
      .RuleFor("age")
      .HasField()
      .WithMessage("Validation problem. age is required");
    super
      .RuleFor("city")
      .HasField()
      .WithMessage("Validation problem. city is required");
  }
}
