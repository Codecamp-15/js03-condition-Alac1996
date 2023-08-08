let p = prompt("your score is");

if (p === null || p.trim === "" || isNaN(p) || p >= 101) {
  alert("invalid");
} else {
  let point =
    p >= 80 && p <= 100
      ? "A"
      : p >= 70 && p <= 79
      ? "B"
      : p >= 60 && p <= 69
      ? "C"
      : p >= 50 && p <= 59
      ? "D"
      : p >= 0 && p <= 49
      ? "F"
      : "";

  alert(point);
}
