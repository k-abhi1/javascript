// Q2. WAP which can given grades to student according to thier scores,
// let score =prompt("enter the number");
let score=90;
let grade;

if(score>= 90 && score<=100){
   grade="A";
}
else if(score>= 80 && score<=90){
    grade="B";
 }
 else if(score>= 70 && score<=80){
    grade="C";
 }
 else if(score>= 60 && score<=70){
    grade="D";
 }
 else if(score>= 50 && score<=60){
    grade="E";
 }
 else if(score>= 40 && score<=50){
    grade="G";
 }
 if(score>= 0 && score<=39){
    grade="F";
 }
 
 console.log("accoring to you score, yoyer grade was:",grade)