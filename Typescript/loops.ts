// Loops - for, while, do-while
// Loops - will execute the same block {...} of code multiple times until the condition is false.
// 

// 1. for loop
    //  a. for loop - traditional for loop - known number of times to run the iteration.
    //  b. for of loop - loop through the itterable objects, like array, strings
    //  c. for in loop - loop through the properties of an object{key : value}
// 2. while loop - don't know the number of times to run the itteration.
// 3. do while loop - run the block{...} of code at least once before check the condition.

// 1. for loop - Syntax
/*
for(initialization; condition; increment/decrement){
    block of code to be executed
}

initialization - initialize the value of a variable to start the iteration, example: for let i = 1
condition - to check wheather the loop should continue or not, example: i < 5
increment/decrement - increment or decrement the value of the variable to move towards the condition, example: i++ / i-- (i = i+1)
*/

for(let i = 1; i <=5; i++){
    console.log(i)
    if(i==3){
        break
    }
}

// 2. while loop
/*
initialization
while(condition){
    block of coe to be executed
increment/decrement i++ / i --
}
*/
let j = 5
while(j != 0){
    console.log(j)
    j--
}

// 3. Do While loop - execute the block of code {..} once then check the condition
/*
do{
    block of code to be executed
    increment/decrement
}while(condition)
*/
let k = 10
do{
    console.log(k)
    k--

}while(k <1)
