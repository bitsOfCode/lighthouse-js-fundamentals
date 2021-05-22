const raining = [true, true, false, false];
const cold = [false, true, false, true];

for (let i = 0; i < cold.length; i++) {
  console.log(`raining = ${raining[i]}, cold = ${cold[i]}`);
  if (raining[i]) {
    console.log("Don't forget your umbrella!");
  } else {
    console.log("No need for an umbrella!");
  }
  
  if (cold[i]) {
    console.log("Make sure you pick out a scarf!");
  } else {
    console.log("Short sleeves are fine!");
  }
  
  console.log("Now you're ready to go outside!\n");  
}

for (let i = 0; i < 10; i++) {

const temperature = (Math.floor(Math.random() * 50) - 25);
console.log(`temperature = ${temperature}`);

  if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature < 15) {
      console.log("Short sleeves won't cut it!");
  } else {
      console.log("Short sleeves are fine!");
  }
  console.log("Now you're ready to go outside!\n");
}
