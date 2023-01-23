const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const whichSchool = function(age) {

if (age < 13) {
  console.log("Elementary School");
} else if (age > 13) {
  console.log("Secondary School");
} else {
  console.log("Lighthouse Labs");
}

var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}