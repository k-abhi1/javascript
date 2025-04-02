// function

// console.log("Hello World");
// "abcd".toUpperCase();
// [1,2,3].Push(4);

// function myfunction(){
//     console.log("Hello World");
//     console.log("learn js");
// }
// myfunction();


// function myfunction(sms){
//     //parameter input->
//     console.log(sms);
// }
// myfunction("love learn js");//argument



// function 2 number sum clculate

function add(a,b){
    // local variables in the block  scope ->
    return a+b;
}
console.log(add(10,20));

// modern javascript function arrow function
const arrwsum=(a,b) => {
    return a+b;
}
console.log(arrwsum(10,20));
// function expression


const arrowmul=(a,b)=>{
    return a*b;

}
console.log(arrowmul(10,20));

// Q1. create a function using the function keyword that task a string as a argument & return the number os volwel in the string


function countVowels(str){
    let count=0;
    const vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world")); 



// create the errow function porfome the same task

let countVowelsArrow=(str)=>{
    let count=0;
    const vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;

}
console.log(countVowelsArrow("hello world"));


// for each loop 

function myfunction(){
    console.log("hello worlds");
}
    

// let arr=[1,2,3,4,5];
// arr.forEach(Val,inx) => {
//     console.log(Val,inx);
//     console.log(val.toUpperCase());
// });

// claculate the sqare root using foreach loop

let arr=[1,2,3,4,5];
arr.forEach((val,inx) => {
    console.log(val*val);
});