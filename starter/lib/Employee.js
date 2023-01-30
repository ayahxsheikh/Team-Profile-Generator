// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    };

    getName(){
        return this.name;
     };
 
     getId(){
        return this.id
     };
 
     getEmail(){
        return this.email
     };
 
     getRole(){
        return 'Employee';
     };
 };


const e = new Employee("Alice", 20, "alice@test.com");

e.getName();

module.exports = Employee;