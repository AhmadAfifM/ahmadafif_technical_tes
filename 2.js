console.log("====================SOAL NO 2====================");
const bubbleSort = (array) => {
  if (!(typeof array === "object" && array.length > 0))
    return "Parameter is not allowed";
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
};
const arr = [12, 10, 13, 9, 8, 6];
console.log(bubbleSort(arr));
console.log(bubbleSort({ a: "a" }));
console.log(bubbleSort("a"));
