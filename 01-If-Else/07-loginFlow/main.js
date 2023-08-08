let input_1 = prompt("Username");
let input_2 = prompt("Password");

if (input_1 === "" || input_2 === "") {
  alert(input_1 === "" ? "username is required" : "password is required");
} else if (
  (input_1 === "admin" && input_2 === "1234") ||
  (input_1 === "john" && input_2 === "qwerty")
) {
  alert("Hello " + input_1);
} else {
  alert("invalid username or password");
}
