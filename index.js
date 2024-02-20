//OUTPUTS
const output_year = document.getElementById("dash-year");
const output_month = document.getElementById("dash-month");
const output_day = document.getElementById("dash-day");

//INPUTS
const enter_year = document.getElementById("year");
const enter_month = document.getElementById("month");
const enter_day = document.getElementById("day");

//FORM
const form = document.getElementById("myForm");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate(){
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if(!input.value){
            input.style.borderBlockColor = " hsl(0, 100%, 67%)";
            parent.querySelector("small").innerText = "This field is required.";
            validator = false;
        }else if(enter_month.value > 12) {
            enter_month.style.borderBlockColor = " hsl(0, 100%, 67%)";
            enter_month.parentElement.querySelector("small").innerText = "Must be a valid month.";
            validator = false; 
        }else if(enter_day.value > 31) {
            enter_day.style.borderBlockColor = " hsl(0, 100%, 67%)";
            enter_day.parentElement.querySelector("small").innerText = "Must be a valid day.";
            validator = false;
        }else{
            input.style.borderBlockColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true; 
        }
        console.log();
        
    })
    return validator;
}

function handleSubmit(e){
    e.preventDefault();
    if(validate()){
        if(enter_day.value > day){
            day = day + months[month - 1];
            month = month - 1;
        }
        if(enter_month.value > month){
            month = month + 12;
            year = year - 1;
        }

        const d = day - enter_day.value;
        const m = day - enter_month.value;
        const y = day - enter_year.value;


        output_day.innerHTML = d;
        output_month.innerHTML = m;
        output_year.innerHTML = y;
    }
}
