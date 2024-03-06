let result = 0;

while (true) {
  let n = prompt("give me a number");
  if (n === "exit") {
    alert(+result);
    break;
  }
  let m = +n;
  result = result + m;
}
