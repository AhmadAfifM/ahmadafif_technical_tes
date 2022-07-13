console.log("====================SOAL NO 3====================");
const drawPattern = (length) => {
  if (!(typeof length === "number" && length % 2 === 1))
    return "Parameter is not allowed";

  let n = "";
  for (let i = 1; i <= length; i += 1) {
    for (let j = 1; j <= length; j += 1) {
      if (i == Math.round(length / 2)) {
        if (i == Math.round(length / 2) && j == Math.round(length / 2)) {
          n += " # ";
        } else {
          n += " * ";
        }
      } else if ((j == 1 && i == 1) || (j == 1 && i == length)) {
        n += " * ";
      } else if (j == Math.round(length / 2)) {
        n += " * ";
      } else if ((j == length && i == 1) || (j == length && i == length)) {
        n += " * ";
      } else {
        n += " # ";
      }
    }
    n += "\n";
  }
  return;
};

console.log(drawPattern(5));
console.log(drawPattern(7));
console.log(drawPattern(9));
