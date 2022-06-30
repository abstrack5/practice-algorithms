// my attempt
const checkEvenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOrOdd(20001));


// module example
const isEven = (num) => {
  let even = true;
 
  for (let i = 0; i < num; i++) {
    even = !even;
  }
 
  return even;
 };

console.log(isEven(20001));
