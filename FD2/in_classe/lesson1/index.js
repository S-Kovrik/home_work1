// const FALLBACK_VALUE = "none";
// const firstName = prompt("Enter your name") || FALLBACK_VALUE;
// const lastName = prompt("Enter last name") || FALLBACK_VALUE;
// const middleName = prompt("Enter your middle name") || FALLBACK_VALUE;

// const fio = `${lastName} ${firstName} ${middleName}`;
// alert(fio);
const MAX_AGE = 150;
const MIN_AGE = 1;

let firstName;
let lastName;
let middleName;
let age;
do {
  firstName = prompt("Enter your first name");
} while (
  // while(firstName === null || firstName === '');
  // while(Boolean(firstName) === false)
  !firstName
);

do {
  lastName = prompt("Enter last name");
} while (!lastName);

do {
  middleName = prompt("Enter your middle name");
} while (!middleName);

do {
    // const userIput = prompt('enter your age')
    // age = userIput ? Number(userIput) : NaN;
  age = Number(prompt("Enter your age"));
} while (!isFinite(age) || age < MIN_AGE || age > Max_AGE);

let fio = `${lastName} ${firstName} ${middleName} ${age}`;
alert(fio);

// let normalizedUserInput = '';
// for (const char of usetInput){
//     if (char === ','){
//         normalizedUserInput += '.';
//     } else{
//         normalizedUserInput += char;
//     }
// }