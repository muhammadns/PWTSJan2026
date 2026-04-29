// Object is a collection of key and value pair inside a curley braces {key: value}

const Human =
{
id: "12345",
name: "Noman",
address: "US"

}

// how to access the value from object: objectname.key
console.log(Human.id)

// another way to access the value: Internally the key inside the object stored in the form of string using single OR double quote.
console.log(Human["address"])

// JSON - Javascript Object Notation - value are in key and value pairs
/*
{
    "Key": "Value"
}
*/

import data from '../testdata/login.json'
import dd from '../testdata/dd.json'

//console.log(data)
console.log(data.url)

//console.log(dd)
console.log(dd[1].productName)

for(let data of dd){
    console.log(data.productName)
}

