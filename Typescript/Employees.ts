// Class - Blueprint to create an object
// ES 6 - ECMA Script 6 - 2015

// Class is a collection of properties (Variable) and methods (Function)
// Sets of codes inside a Class known as method and outside of the Class known as function
// ClassName should be similar to the filename (Employees.ts), Class name should be
// 'Employee' and it should always start with upper casae letter

// whenever create a variable in a class, do not need to mention let / const keyword

// Access Modifier - it is a permission to access a variable and method, three types of:
    // public - default - can be accessible everywhere
    // private - can only be accessable inside the same class
    // readonly - cannot be modified
    // static - does not belongs to the class. It can not be accessable by object of a class, you can
    // access static varibales or method by using the ClassName, ex: ClassName.key3


// Syntax to create a class:
/*
export class ClassName{
    properties - variables - Locator (in PW) - is not mandatory in JS BUT mandatory in TS
        key :datatype = value - key is variable name
        key1:datatype
        private key2:datatype
        static key3:datatype
        readonly key4:datatype

    Constructor - it is a special method which is used to initialize the properties of a class, it
    is automatically called when an object of the class is created, it can take parameters to initialize
    the properties of the class.
        constructor(key:datatype, key1:datatype, key2:datatype, key4:datatype){
        this -  it is a keyword which refers to the current intance of the class.

            this.key1 = key1
            this.key2 = key2
            this.key4 - key4
        }


    methods - functions

    functionName(){
    ......
    }

    static functionName1(){
    .......
    }

    const obj = new ClassName(key, key1, key2, key4)
    obj.key
    obj.key1
    obj.functionName()
    Employee.functionName1() - static method can be accessed bu using the class name


    functionName(){
    
    }

    static functionName1(){
    
    }

    const obj = new ClassName (key1, key2, key4)
    obj.key
    obj.key1

}
*/

export class Employees{

    empid: number
    empName: string
    empAge: number
    private empSalary
    readonly offer: number
    static companyName = "ABC"

    constructor(id:number, name:string, age: number, salary:number, offer:number){
        this.empid = id             // emp.empid = id
        this.empName = name         // emp.empName = name
        this.empAge = age           // emp.empAge = age
        this.empSalary = salary     // emp.empSalary = salary   
        this.offer = offer          //

    }

    emplyeeInformation():void{
        console.log(`Employee id is ${this.empid} and Employee name is ${this.empName} and Employee age is ${this.empAge}
            and Employee salary is ${this.empSalary} and Employee offer is ${this.offer}
            and Company name is ${Employees.companyName}`)
    }

    static displayCompanyName(){
        console.log(`Company name is ${Employees.companyName}`)
    }

}

const emp = new Employees(101, "Noman", 25, 10000, 20000)
console.log(emp.empid)
console.log(emp.empName)
emp.emplyeeInformation()
Employees.displayCompanyName()

//emp.offer = 50000
//console.log(emp.offer)
