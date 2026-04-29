// string - combination of character inside single quote '' (string literal) or double quote "" (string literal) and
//  backtick `` (template literal).

let singleQuote = 'Single quote string'
let doubleeQuote = "Double quote strin"

// There are 2 purpose for backtick, multi line string and string Parameterization(Template literal) for data driven testing.

// Multi line string
let multiLineStr = `This is
multiple line
string`
console.log(multiLineStr)

// String Parameterization - $(variable name)
let age = 20
let message = `Your age is ${age}`
console.log(message)


// Boolean data type - true/false
let isAdmin = false
let isEmployee = true

// null data type - Intentional absence of a value
let num1 = null
console.log(num1)

// undefined - defined a variable but have not assigned a value to it.
let any1
console.log(any1)

let undefinedVar : undefined = undefined
// undefinedVar = 5

// union ( | ) - combination of multiple data type

// Example 1
let num2 : (number | string) = 10
num2 = "TS"

// Example 2
let num3 : (string | boolean | number) = "Noman"
console.log(num3)
num3 = true
console.log(num3)
num3 = 5
console.log(num3)

// any - Free to acccept any kind of data type
let any2 :any = 10
console.log(any2)
any2 = "TS"
console.log(any2)
any2 = true
console.log(any2)
any2 = null
console.log(any2)
any2 = undefined
console.log(any2)

// void - nothing - it is used inside the function as a return
function add(): void{
    console.log("Welcome to addition")
}

console.log("*****************************************************")
let str = "Welcome to TypeScript"

// 1. length - return the number of string in a string
/*
Syntax
stringName.length
*/
console.log(str.length)

// 2. charAt(index) - returns the character at a specified index
// Syntax:
console.log(str.charAt(4))

// 3. concat(str1, str2...) - similar to array concept
/*
Syntax:
    stringName.concat(str1, str2)
*/

// 4. includes(searchString, startIndex?)
/*
Syntax:
    stringName.includes("String or char", startIndex) - return a boolean true/false
*/

// 5. indexOf
/*
Syntax:
    indexOf(searchValue, fromIndex?)
*/

// 6. laastIndexOf(searchIndex, startIndex?)
/*
Syntax:
*/

// 7. slice(startIndex?, endIndex?) - return a portion of a string
/*
Syntax:
stringName.slice(stat=rtIndex, endIndex(exclusive))
*/
let str3 = "This is a string"
console.log(str3.slice())
console.log(str3.slice(4))
console.log(str3.slice(4, 10))
console.log(str3.slice(10, 5)) // will provide empty value

// 8. substring(startIndex, endIndex?) - startIndex is MANDATORY, endIndex is optional
let str4 = "This is a subString"
console.log(str4.substring()) // argument (startIndex) is missing which is mandatory
console.log(str4.substring(4))
console.log(str4.substring(4, 10))
console.log(str4.substring(10, 4)) // will provide vlaue

// 9. startWith(string, startIndex?) - it check if the string is starting with the specified string and return a boolean value.
console.log("***** startsWith *****")
console.log(str3.startsWith("T"))
console.log(str3.startsWith("This"))
console.log(str3.startsWith("this"))
console.log(str3.startsWith("s", 10))

// 10. endsWith(string, startIndex?) - it check if the string is ending with the specified string and return a boolean value.
console.log("***** endsWith *****")
console.log(str4.endsWith("g"))
console.log(str4.endsWith("subString"))
console.log(str4.endsWith("SubString"))
console.log(str4.endsWith("s", 9))

// Username - username

// 11. toUpperCase() - convert the string to UPPER case letter
console.log(str3.toUpperCase())

// 12. toLowerCase() - convert the string to LOWER case letter
console.log(str3.toLowerCase())

// 13. trim() - it removes the leading and trailing whitespaces from a string and return a new value
console.log("username" == "  username  ".trim())

// 14. trimStart() - it removes the leading whitespaces from a string and return a new value
console.log("username " == "  username ".trimStart())

// 15. trimEnd() - it removes the trailing whitespaces from a string and return a new value
console.log(" username" == " username ".trimEnd())

// 16. split(seperator) - splits the string into an ARRAY of substring based on specified seperator
/*
Syntax:
stringName.split(seperator)
*/
let str6 = "Apple Bannan mango Typescript js BLUE"
console.log(str6.split(" "))
console.log(str6.split("a"))

let email = "praveen@qamitra.com"
let str11 = email.split("@")
console.log(str11)
console.log(str11[1])
console.log(str11[1].split(".")[0])

