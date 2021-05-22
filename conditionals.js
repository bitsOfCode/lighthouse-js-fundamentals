// if Statements

const raining = [true, true, false, false];
const cold = [false, true, false, true];

for (let i = 0; i < cold.length; i++) {
  console.log(`raining = ${raining[i]}, cold = ${cold[i]}`);
  if (raining[i]) {
    console.log("Don't forget your umbrella!");
  }
  if (!raining[i]) { // 'else' replaced with '!raining' to specifically test this logic
    console.log("No need for an umbrella!");
  }
  
  if (cold[i]) {
    console.log("Make sure you pick out a scarf!");
  } else {
    console.log("Short sleeves are fine!");
  }
  
  console.log("Now you're ready to go outside!\n");  
}
// temp variables to ensure all if ... else conditions have fired
let temp1 = temp2 = temp3 = temp4 = false;

/* Testing for the temperature logic was converted from a 'for' code block
 * to a 'while' code block to ensure all logic scenarios were validated. The
 * 'for' code block required predetermined input values whereas the 'while' 
 * code block enabled the use random values ... a truer test IMO.
 */

while (!temp1 || !temp2 || !temp3 || !temp4) {
  
  const temperature = (Math.floor(Math.random() * 120) - 60);
  console.log(`temperature = ${temperature}`);
  
  // Version 1
  /* if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature < 15) {
      console.log("Short sleeves won't cut it!");
  } else {
      console.log("Short sleeves are fine!");
  }
  console.log("Now you're ready to go outside!\n");*/
  
  // Version 2
  if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a good idea ...");
    temp1 = true;
  } else {
    if (temperature < 0) {
      console.log("Make sure you pick out a scarf!");
      temp2 = true;
    } else if (temperature >= 0 && temperature < 15) {
      console.log("Short sleeves won't cut it!");
      temp3 = true;
    } else {
    console.log("Short sleeves are fine!");
      temp4 = true;
    }
    console.log("Now you're ready to go outside!");
  }
  console.log(`temp1 = ${temp1}, temp2 = ${temp2}, temp3 = ${temp3}, temp4 = ${temp4}\n`);
}


// Logical Operators

for (i = 0; i < 5; i++) {
  const citizenship = Math.floor(Math.random() * 2);
  const isCitizen = [true, false]; // left true at index 0 even though output looks wrong ... true and false should be flipped
  const age = Math.floor(Math.random() * 30);

  console.log(`citizenship = ${citizenship}, isCitizen = ${isCitizen[citizenship]}, age = ${age}`);

  if (isCitizen[citizenship] && age > 18) {
    console.log("You are eligible to vote.\n");
  } else {
    console.log("You are ineligible to vote.\n"); // added a statement for the false condition
  }
}
