import EmployeeValidatior from "../validationRules/employeeValidatior.js";
import { users } from "../data/users.js";
export default class EmployeeService {
  constructor() {
    this.employees = [];
    this.errors = [];
    this.load()
  }
  load() {
    users
      .filter((u) => u.type === "employee")
      .forEach((u) => this.addEmployee(u));
  }
  addEmployee(employee) {
    let validator = new EmployeeValidatior();
    let result = validator.Validate(employee);
    if (result.ruleResult) this.employees.push(employee);
    else this.errors.push(result.errors);
  }
  getEmployeeById(id) {
    return this.employees.find((u) => u.id === id);
  }
  listEmployees() {
    return this.employees;
  }
  getEmployeesSorted() {
    return this.employees.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
