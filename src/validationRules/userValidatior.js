import ValidatiorBase from "./validatiorBase.js";
//id firstName lastName age city
export default class UserValidatior extends ValidatiorBase {
  constructor() {
    super();
    super
      .RuleFor(x=>x.id)
      .HasField()
      .WithMessage("Validation problem. id is required");
    super
      .RuleFor(x=>x.firstName)
      .HasField()
      .WithMessage("Validation problem. firstName is required");
    super
      .RuleFor(x=>x.lastName)
      .HasField()
      .WithMessage("Validation problem. lastName is required");
    super
      .RuleFor(x=>x.age)
      .HasField()
      .WithMessage("Validation problem. age is required")
      .IsNumber()
      .WithMessage("age is not number");
    super
      .RuleFor(x=>x.city)
      .HasField()
      .WithMessage("Validation problem. city is required");
  }
}
