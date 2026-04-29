// array - [10, 20, 30, 40]

let array = [10, 3, 4, "JS", true] // index start with 0 - first position element
console.log(array[0])

// There are 2 ways to declear an array

//  1.using array bracket - [] - array literal
/*
Syntax:
let/const arrayName :datatype[](optional) = [value1, value2,...]
*/
let array1:number[] = [12, 34, 5, 67, 89]
let array2:any = [10, 2, 3, "TS", "JS"]
let array3:any[] = [10, 2, 3, "TS", "JS"]

//  2. using new keyword - array constructor - new array()
/*
Syntax
let arranyName = new Array<datatupe>(value1. value2,..)
*/

let array4 = new Array(10, 20, 30)
let array5 = new Array<any>(10, 20, 30, true)
console.log(typeof array4)
console.log(typeof array5)

console.log(Array.isArray(array5))

// let array = [10, 3, 4, "JS", true]
/*
Syntax:
arrayName[index]
*/

// There is a propery name 'Length' - return the total number of element in a array
console.log(array.length)

// Traditional for loop
for (let i=0; i<array.length; i++){
    console.log(array[i])
}

// By using for ... of loop -  it will iterate over an array
/*
Syntax:
for(variable decleration of arrayName)
{
    console.log(variable)
}
*/
for(let element of array5){
    console.log(element)
}

// 1. push(element1, element2, element3...) method - adds the element to the end of an existing array
let arr6 = [10, 20, "apple", false]
/*
Syntax:
    arrayName.push(element1, element2, element3...)
*/
arr6.push(100, "USA", true)
console.log("after push()", arr6)

// 2. pop(element1, element2, element3...) method - remove the last element from an existing array
/*
Syntax:
    arrayName.pop() - no parameter accepted
*/
arr6.pop()
console.log("after pop()", arr6)

// What is difference between psuh() and unshift() method 
//  push add the element at the end of an existing array but unshift add the element at the begining of an existing array

// 3. unshift(element1, element2, element3...) method - adds the element to the begining of an existing array
/*
Syntax:
    arrayName.unshift(element1, element2, element3...)
*/
arr6.unshift(2000)
console.log("after unshift()", arr6)

// 3. shift()method - remove the first element from an existing array
/*
Syntax:
    arrayName.shift() - no parameter accepted
*/
arr6.shift()
console.log("after shift()", arr6)

// whatis the difference between sslice() and splice()

// 5. slice(startIndex?, endIndex?) - return the portion of an array from the startIndex to endIndex-1
/*
Syntax:
    arrayName.slice(startIndex?, endIndex(exclusive))
    startIndex - the position to start the slice
    endIndex - the position to end the slice
*/
console.log("Slice", arr6.slice(2,5))
console.log("Slice", arr6.slice(0,1))
console.log("Slice", arr6.slice(7,2)) // return EMPTY array

// 6. splice(startIndex, deletCount?, element1, element2, element3...) perform addition and deletion same time
/*
Syntax:
arr6.splice(startIndex, deletCount?, element1, element2, element3...)
    startIndex - the position where add / delets the element
    deleteCount - the number of elements to be deleted from startIndex
    element1, element2, element3 - the element that add at the start index
*/
let arr7 = [10, 20, 30, 40, 50, 60]
console.log(arr7)
console.log("after Splice with consoleLog", arr7.splice(2, 3, 15, 25))

let arr8 = [10, 20, 30, 40, 50, 60]
arr8.splice(2, 3, 15, 25)
console.log("after Splice 3", arr8)

let arr9 = [10, 20, 30, 40, 50, 60]
arr9.splice(2, 2, 15, 25)
console.log("after Splice 2", arr9)

// 7. indexOf(element, startIndex) - return the index of the first occurance of an element in an Array
/*
Syntax:
    arrayName.indexOf(element, startIndex?)
*/
let arr10 = [10, 20, 30, 40, 50, 40, 30]
const index = arr10.indexOf(30)
console.log(index)

// ASSIGNMENT - find all the index of 30 inside in array arr10
// ASSIGNMENT - find index of first duplicate value from the array

// 8. lastIndexOf(element, startIndex?)- return the index of the last occurance of an element in an Array

const lastIndex = arr10.lastIndexOf(30)
console.log(lastIndex)

// 9. concat(array2, array3) - merge 2 or more array and return a new array
/*
Syntax:
arrayName.concat(arr1, arr2, arr3)
*/
let arr11 = [1, 2, 3, "TS"]
let arr12 = ["10", "JS"]
let arr13 = arr11.concat(arr12)
console.log(arr13)

// 10. join(seperator?) - join all the elements of an array and return as a string/*
/*

*/
let arr14 = ["01", "31", "2026"]
const joinResult = arr14.join()
console.log(joinResult)

const joinResult1 = arr14.join("/")
console.log(joinResult1)

// 11. toString() - convert the array in string format
console.log(arr14.toString())


// 12. includes(element, startIndex?) - return TRUE if the element is found in the array, otherwise FALSE 
console.log(arr14.includes("2026"))
console.log(arr14.includes("20206"))
