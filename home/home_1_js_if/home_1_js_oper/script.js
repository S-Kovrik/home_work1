var surname = prompt("Введите фамилию");
var name1 = prompt("Введите имя");
var familyName = prompt("Введите отчество");
var age = prompt("Ваш возраст в годах");
var day = age * 365;
var older = Number(age) + 5;
var gender = confirm("Ваш пол");
gender === true ? (gender = "Мужской") : (gender = "Женский");
(gender === "Мужской" && age < 65) || (gender === "Женский" && age < 60)
  ? (oldPeople = "Нет")
  : (oldPeople = "Да");
alert(
  "ваше ФИО:" +
    " " +
    " " +
    surname +
    " " +
    " " +
    name1 +
    " " +
    " " +
    familyName +
    "\n" +
    "ваш возраст в годах:" +
    " " +
    age +
    "\n" +
    "ваш возраст в днях:" +
    " " +
    day +
    "\n" +
    "через 5 лет вам будет:" +
    " " +
    older +
    "\n" +
    "ваш пол:" +
    " " +
    gender +
    "\n" +
    "вы на пенсии:" +
    " " +
    oldPeople
);
