var str = "";
for (var i = 1; i < 6; i++) {
  for (var j = 1; j < 4; j++) {
    if (i % 2 == 0 && j % 2 == 0) {
      str += " ";
    } else {
      str += "#";
    }
  }
  str += "\n";
}
console.log(str);
