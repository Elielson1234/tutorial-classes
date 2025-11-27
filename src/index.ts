import Customer from "./customer";
const customer1 = new Customer("Elielson","Morais","elielson@morais",new Date(2007,4,25));
const customer2 = new Customer("Gabriel","Costa","gabriel@costa",new Date(2003,9,16));


console.log(customer1.isAdult());
console.log(customer2.isAdult());
console.log(customer1.getFistName());
console.log(customer1.getSecondName());
console.log(customer2.getFistName());
console.log(customer2.getSecondName());

