let input = prompt("Name");

let user;
if (input === "" || input === null) {
  user = "guest";
} else if (input === "codecamp") {
  let password = prompt("Enter Password");
  if (password === "123456") {
    user = "codecamp";
  } else {
    alert("Wrong password");
  }
} else {
  user = "guest";
}
if (user !== undefined) {
  alert("Welcome " + user);
}
