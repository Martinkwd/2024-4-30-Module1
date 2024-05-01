// 1. Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen.

function Sum(a,b)
{
    return (a+b)
}
console.log(Sum(13,14))


function Subtraction(a,b)
{
    return (a-b)
}
console.log(Subtraction(13,14))

function Multiplication(a,b)
{
    return (a*b)
}
console.log(Multiplication(13,14))

function Division(a,b)
{
    return (a/b)
}
console.log(Division(13,14))

// 2. Create a function that takes the name of a person as an argument, and prints out “Hello <name>” to the console. Hint: search online on how to concatenate two strings.
const str1= 'Hello'
const str2= 'Martin'
console.log(str1.concat(' ', str2));

// alternative 
function PersonName(name) {
    console.log("Hello " + name);
}
PersonName("Martin");