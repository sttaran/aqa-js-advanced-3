const userAge = 11;

// switch (userAge){
//     case 10: // userAge === 10
//         console.log("10 years")
//     case 11: // userAge === 11
//         console.log("11 years")
//     case 12: // userAge === 12
//         console.log("12 years")
//     default:
//         console.log("Unhandled age")
// }

// switch (userAge){
//     case 10: // userAge === 10
//         console.log("10 years")
//         break
//     case 11: // userAge === 11
//         console.log("11 years")
//         break
//     case 12: // userAge === 12
//         console.log("12 years")
//         break
//     default:
//         console.log("Unhandled age")
// }

// const name = "Peter"
//
// switch (name[0]){
//     case "A": // name[0] === "A" || name[0] === "P"
//     case "P":
//         console.log("Your gift is 1000$")
//         break
//     case "B":
//         console.log("Your gift is 100$")
//         break
//     default:
//         console.log("Nothing for you today. Good luck next time")
// }

const isMarried = true;
const yearsInCompany = 5;

switch (true) {
  case isMarried && yearsInCompany > 5:
    console.log('Congrats and 1000$');
    break;
  case isMarried && yearsInCompany > 2:
    console.log('Congrats and 500$');
    break;
  case isMarried && yearsInCompany > 1:
    console.log('Congrats and 100$');
    break;
  default:
    console.log('Congrats');
}

if (isMarried && yearsInCompany > 5) {
  console.log('Congrats and 1000$');
} else if (isMarried && yearsInCompany > 2) {
  console.log('Congrats and 500$');
} else if (isMarried && yearsInCompany > 1) {
  console.log('Congrats and 100$');
} else {
  console.log('Congrats');
}
