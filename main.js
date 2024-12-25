//let text =20;
//text=40;

//const pie=22/7;
//pie=2;//error in console of website
function fun(text){
    console.log(text);
}
fun("Sarvadnya's");
fun("Edureka");
fun("Site");
fun(typeof 7);
let text2;
console.log(typeof text2);
console.clear();

//dom:document object model(its logical HTML)
let btn=document.querySelector("#btn");
let countElement=document.querySelector("#count");
let counter=0;

function btnEvent(){

    counter++;
    countElement.innerHTML=counter;
}
btn.addEventListener('click',btnEvent);