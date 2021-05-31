function isOdd(x) {
  return (x % 2 !== 0);
}

for (let i = 0; i < 10; i++) {
  // console.log(i + " is odd: " + isOdd(i));
  console.log(`${i} is odd: ${isOdd(i)}`);
}