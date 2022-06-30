const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = data.findIndex((numbers) => numbers == 99);

console.log(findIndex);


// ============================================================================


const whatIndex = (num) => {
  for (i = 0; i < data.length; i++) {
    if (data[i] == num) {
      console.log(`Number ${num} found at index ${i}`);
      return;
    }
  }
};

whatIndex(23)
