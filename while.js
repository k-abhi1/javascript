// let a=1;
// while(a<=10){
//     console.log(a,"abhishek kumar");
//     a++;
// }

//do while loop
// let i=20;
// do{
//     console.log(i,"abhishek kumar");
//     i++;
// }
// while(i<=10);


// for-of loop

// let str="abhishek kumar";
// length=0;
// for(let i of str){
//     console.log("i=",i);
//     length++;
// }
// console.log("length of string",length);


// for-in loop

// let stu={
//     nmae:"abhishek kumar",
//     age:23,
//     city:"delhi",
//     state:"up",
//     country:"india"

// }
// for(let i in stu){
//     console.log("i=",i);
//     console.log("stu[i]=",stu[i]);
// }

// Q1: Write a program to print the numbers from 1 to 100 using for loop.

// let i=1;
// for(i=1;i<=100;i++){
//     if(i%2===0){
//         console.log("even no",i);
//     }
//     else{
//         console.log("odd no",i);
//     }
// }


// Q2 GUSSES CURRECT NUMBER

let num=10;
let user=prompt("guess the number");

while(user!=num){
    if(user<num){
        console.log("guess higher");
    }
    else{
        console.log("guess lower");
    }
    user=prompt("guess the number");
}