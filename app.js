// let flag = true;
// if (!flag) {
//   console.log("Power is OFF");
// }
// if (flag) {
//   console.log("Power is ON");
// }
// if (7 < 2) {
//   console.log("Failure");
// }
// if (7 > 2) {
//   console.log("Success");
// }

let flag = false;
const num = 10;
if (!flag) {
  console.log("Power is OFF");
} else {
  console.log("Power is ON");
}
if (num === 5) {
  console.log("Number is Five");
} else if (num === 10) {
  console.log("Number is Ten");
} else {
  console.log("Number is Neither Five nor Ten");
}

// let day;
// switch (5 - 2) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   default:
//     day = "Weekend";
// }
// console.log("It is " + day);

// let i = 0;
// for (i = 1; i < 11; i++) {
//   console.log("Iteration Number: " + i);
// }

// let i = 10;
// while (i > -1) {
//   console.log("Countdown Number: " + i);
//   i--;
// }

// let i = 2;
// do {
//   i *= 2;
//   console.log("Multiplied Number: " + i);
// } while (i < 1000);

let i = 0;
let j = 0;
for (i = 1; i < 3; i++) {
  console.log("Outer Loop: " + i);
  for (j = 1; j < 4; j++) {
    if (i === 1 && j === 2) {
      console.log("\tSkipped: " + j);
      continue;
    }
    if (i === 2 && j === 2) {
      console.log("\tBroken: " + j);
      break;
    }
    console.log("\tInner Loop: " + j);
  }
}
