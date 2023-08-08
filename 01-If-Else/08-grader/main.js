let p = prompt("point");

if (p === null || p.trim === "" || isNaN(p) || p >= 101) {
  alert("invalid number");
} else if (p >= 80 && p <= 100) {
  alert("A");
} else if (p >= 70 && p <= 79) {
  alert("B");
} else if (p >= 60 && p <= 69) {
  alert("C");
} else if (p >= 50 && p <= 59) {
  alert("D");
} else alert("F");
