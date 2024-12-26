//let text =20;
//text=40;

//const pie=22/7;
//pie=2;//error in console of website
//function fun(text){
    //console.log(text);
//}
//fun("Sarvadnya's");
//fun("Edureka");
//fun("Site");
//fun(typeof 7);
//let text2;
//console.log(typeof text2);
//console.clear();

//dom:document object model(its logical HTML)
//let btn=document.querySelector("#btn");
//let countElement=document.querySelector("#count");
//let counter=0;

//function btnEvent(){

    //counter++;
    //countElement.innerHTML=counter;
//}
//btn.addEventListener('click',btnEvent);


//arrays
let array=[10,20,30,40];
console.log(array);
//console.log(array[3]);
//console.log(array.length);
//array.push(50);
//console.log(array);
//array.splice(3,1);
//array.splice(3,2);//splice is delete element

//search


let search=10;
let found1 =array.find(function(value){
    return search===value;
});
console.log(found1);
//filter returns more thatn one value

let found2 =array.filter(function(value){
    return search===value;
});
console.log(found2);
//js object

let student={
    name: "Sarvadnya",
    roll:7,
    age:20,
    marks:100,
};

//number of students
let studentList = [
    { name: "Ram", age: 24, gender: "male" },
    { name: "Laksman", age: 22, gender: "male" },
    { name: "Sita", age: 24, gender: "female" },
    { name: "Hanuman", age: 22, gender: "male" },
    { name: "Sugreev", age: 29, gender: "male" },
  ];
  
let age=20;
let searchRes=studentList.filter(function(value,index)
{
    //return age===value.age
    return age<=value.age;
});
console.log(searchRes);

