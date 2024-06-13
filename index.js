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

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function validate(){
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if(!input.value){
            input.style.borderBlockColor = " hsl(0, 100%, 67%)";
            parent.querySelector("small").innerText = "This field is required.";
            validator = false;
        } else {
            input.style.borderBlockColor = "black";
            parent.querySelector("small").innerText = "";
        }
     });
        
        if(enter_month.value < 1 || enter_month.value > 12) {
            enter_month.style.borderBlockColor = " hsl(0, 100%, 67%)";
            enter_month.parentElement.querySelector("small").innerText = "Must be a valid month.";
            validator = false; 

        }

        const maxDays = months[enter_month.value - 1];
        if (isLeapYear(enter_year.value) && enter_month.value == 2) {
            maxDays = 29;
        }

        if (enter_day.value < 1 || enter_day.value > maxDays) {
            enter_day.style.borderBlockColor = "hsl(0, 100%, 67%)";
            enter_day.parentElement.querySelector("small").innerText = "Must be a valid day.";
            validator = false;
        }
        
   
    return validator;
}

function handleSubmit(e){
    e.preventDefault();
    if(validate()){
        let d = day - enter_day.value;
        let m = month - enter_month.value;
        let y = year - enter_year.value;

        if (d < 0) {
            m -= 1;
            d += months[(month - 2 + 12) % 12];
            if (isLeapYear(year) && month == 3) {
                d += 1;
            }
        }

        if (m < 0) {
            y -= 1;
            m += 12;
        }

        output_day.innerHTML = d;
        output_month.innerHTML = m;
        output_year.innerHTML = y;
    }
}
