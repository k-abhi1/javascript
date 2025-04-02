// let marks_student=12;

// let obj={
//     student:"abhishek kumar",
//     markas:123,
//     subject:"javascript",
// }

// let marks=[68,45,56,6,75,7,76,8,];
// marks[0]=99;
// console.log(marks);
// console.log(marks.length);
// console.log(marks[0]);
// // console.log(marks[1]);
// // console.log(marks[2]);
// // console.log(marks[3]);



// let names=["abhishek kumar","singh","kumar","abhishek"];
// console.log(names);
// console.log(names.length);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);


// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// // for-of loop

// for(let i of marks){
//     console.log(i);
// }

// Q3.sum of the marks in the array

// let marks=[68,45,56,6,75,7,76,8,];

// let sum=0;

// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// let avg=sum/marks.length;
// console.log(avg);

// Q4. for a given Array,with price of 5 items [250,645,300,900,50]
// all items an offer of 10% on them change the arry ro store final price fter appling offer

let price=[250,645,300,900,50];
let discount=0.10;
let final_price=[];
for(let i=0;i<price.length;i++){
    final_price[i]=price[i]-(price[i]*discount);
}
console.log(final_price);


let fooditems=["pizza","burger","sandwich","pasta"];
console.log(fooditems);
fooditems.push("samosa");
console.log(fooditems);
fooditems.push("biryani","chicken","fish");
console.log(fooditems);
fooditems.pop();
console.log(fooditems);
console.log(fooditems.toString());


// create the arry in the compnye "boolmber","microsoft","google","tcs","wipro","infosys"
//remove the first comnpany from the array
//remove uder & add olain it place 
//add the amzon at the end of the array

let company=["boolmber","microsoft","google","tcs","wipro","infosys"];
company.shift();
console.log(company);
company.splice(2,1,"olain");
console.log(company);
company.push("amazon");
console.log(company);
