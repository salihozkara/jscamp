import CustomerValidatior from "../validationRules/customerValidatior.js";
import { users } from "../data/users.js";
export default class CustomerService {
  constructor() {
    this.customers = [];
    this.errors = [];
    this.load()
  }
  load() {
    users
      .filter((u) => u.type === "customer")
      .forEach((u) => this.addCustomer(u));
  }
  addCustomer(customer) {
    let validator = new CustomerValidatior();
    let result = validator.Validate(customer);
    if (result.ruleResult) this.customers.push(customer);
    else this.errors.push(result.errors);
  }
  listCustomers() {
    return this.customers;
  }
  getCustomerById(id) {
    return this.customers.find((u) => u.id === id);
  }
  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
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
