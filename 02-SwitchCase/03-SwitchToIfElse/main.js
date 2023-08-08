let input = prompt("browser");

if (input == "Edge") {
  alert("You've got the Edge!");
} else if (
  input == "Chrome" ||
  input == "Firefox" ||
  input == "Safari" ||
  input == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
