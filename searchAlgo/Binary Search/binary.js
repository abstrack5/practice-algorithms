const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1; // reduces length from 9 to 8
  let middle = Math.floor((left + right) / 2);

  // console.log(right); //8
  // console.log(middle); //4

  if (num === arr[middle]) {
    console.log(`found: ` + arr[middle]);
    return "found it";
  } else if (num < arr[middle]) {
    right = middle;
    console.log(`right ` + right);
    console.log(`found: ` + arr[middle]);
    return `bring right down to ${right}`;
  } else if (num > arr[middle]) {
    left = middle + 1;
    console.log(left);
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 38));
