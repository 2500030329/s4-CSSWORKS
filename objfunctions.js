//Define a class and create an object using new keyword
class Employee {
    constructor(id, name, designation, salary) {
        this.id = id
        this.name = name
        this.designation = designation
        this.salary = salary
    }
    display() {
        console.log("Employee Id: ", this.id)
        console.log("Employee Name: ", this.name)
        console.log("Employee Designation: ", this.designation)
        console.log("Employee Salary: ", this.salary)
    }
}
let emp1 = new Employee(5892,"Venkatesh","Asst.Prof",85000)
let emp2 = new Employee(9834,"Ramya","Assoc.Prof",125800)
emp1.display();
emp2.display();


