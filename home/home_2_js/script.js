var countryInput = {};
function addCountry(countryName, capitalName) {
  countryInput[countryName] = capitalName;
}

function deleteCountry(countryName) {
  delete countryInput[countryName];
}

function getCountryInfo(countryName) {
  if (countryName in countryInput)
    return "страна: " + countryName + " столица: " + countryInput[countryName];
  else return "нет информации о стране " + countryName + "!";
}

function listCountries() {
  var res = "";
  for (var CN in countryInput) res += "\n" + getCountryInfo(CN);
  return res;
}

addCountry("Германия", "Берлин");
addCountry("Венгрия", "Будапешт");
addCountry("Франция", "Париж");

console.log("список стран: " + listCountries());

function addCountryBn() {
  addCountry(prompt("Введите страну"), prompt("Введите столицу"));
}

function getCountryInfoBn() {
  alert(getCountryInfo(prompt("Введите страну")));
}

function getСountrysAllInfoBn() {
  alert("список стран: " + listCountries());
}

function deleteCountryBn() {
  deleteCountry(prompt("Введите страну"));
}
