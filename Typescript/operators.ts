// 02/03/2024

// Operators - a sumbol that perform various operations

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators.

// 1. Arithmetic operators - use to perform mathmetical calculation
//      1. Addition (+)- addition or concatenation
//      2. Subtraction
//      3. Multiplication
//      4. Division
//      5. Modulus (%) - Provide a Reminder - 9/2
//      6. Exponential (**) Power (5 ** 3 -> 5*5*5)
//      7. Increment (++) - Increase the value by 1
//      8. Decrement (--) -Decrease the value by 1

// When JS/TS convert any datatype into other datatype implictly is known as type Coercion
// When convert explictly it is type conversion like (Number = "4")

let number1 = 10
let number2 = "4"
let number3 = Number("TS")
console.log(number3)

console.log(number1 + number2)
console.log(number1 % number2)
console.log(number1 ** number2)

// Increment (++) - 
//      Pre-Increment (++a) - first the value of the variable increment, then action will perform
console.log(++number1) // 11
//      Post-Increment(a++) - first the action perform then value of the variable will increment
console.log(number1++) // 11
console.log(number1) // 12

// decrement (--) - 
//      Pre-decrement (--a) - first the value of the variable decrement, then action will perform
//      Post-decrement(a--) - first the action perform then value of the variable will decrement

// Comparison Operators - use to compare two values and return the result in Boolean (true/false)
//      1. Equal to (==)
//      2. Not Equal to (!=)
//      3. Strict Equal to (===) - values and data type MUST be same
//      4. Strict Not Equal to (!==)
//      5. Greator than (>)
//      6. Greator than or Equal (>=)
//      7. Less than (<)
//      8. Less than or Equal (<=)

//  1. Equal to (==) - Two values are same or not
let num10 = 10
let num11 = "10"
console.log(num10 == num11)
console.log(num10 != num11)
console.log(num10 === num11)
console.log(num10 !== num11)

// 02/04/2024:
console.log("*** 02/04/2026***")
// 2. Comparison Operator - compare two values.

// 3. Logical Operators - validation of two different conditions and result a BOOLEAN value.
//      1. Logical AND (&&) - both the condition should be TRUE for a true result.
//              true && true = true
                console.log("AND", (10 > 5) && (10 > 9))
//              true && false = false
                console.log("AND", (10 > 5) && (10 > 90))
//              false && true = false
                console.log("AND", (10 > 50) && (10 > 9))
//              false && false = false
                console.log("AND", (10 > 50) && (10 > 90))            
//      2. Logical OR (||) - either of the condition should be TRUE for a true result.
//              true || true = true
                console.log("OR", (10 > 5) || (10 > 9))
//              true || false = true
                console.log("OR", (10 > 5) || (10 > 90))
//              false || true = true
                console.log("OR", (10 > 50) || (10 > 9))
//              false || false = false
                console.log("OR", (10 > 50) || (10 > 90))
//      3. Logical NOT (!) - it will reverse the result, from TRUE to FALSE and vise versa.
//              !true = false
//              !false = true
// 4. Assignment operator (=) - Assign a value to a variable
                let i1 = 100
