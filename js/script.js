//First of all I want to get the time I am now at
let thisMoment = Date();

// Second, I need the date and time for tomorrow at 9:30 AM
const nextClass = new Date(('May 26, 2023 09:30:00'));

setInterval (asTimeGoesBy, 1000);



function asTimeGoesBy (){
    console.log(thisMoment);
    thisMoment = Date();
}