const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  // version 2 addition start
  if (repeat === 5) {
    console.log("change key");
  }
  // version 2 addition end
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");