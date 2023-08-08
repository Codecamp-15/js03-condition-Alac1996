let x = Number(prompt("1st number"));
let y = Number(prompt("2nd number"));
let z = Number(prompt("3rd number"));

let max;
let mid;
let min;

if (x > y && x > y) {
  max = x;
  if (y > z) {
    mid = y;
    min = z;
  } else {
    mid = z;
    min = y;
  }
} else if (y > x && y > z) {
  max = y;
  if (x > z) {
    mid = x;
    min = z;
  } else {
    mid = z;
    min = x;
  }
} else if (z > x && z > y) {
  max = z;
  if (x > y) {
    mid = x;
    min = y;
  } else {
    mid = y;
    min = x;
  }
}

console.log(`MAX = ${max} : ${mid} : ${min}`);
