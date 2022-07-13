console.log("====================SOAL NO 1====================");
const gradeList = ["A", "B", "C"];
const hitungBarang = (grade, qty) => {
  const priceDetail = { totalHarga: 0, potongan: 0, grandTotal: 0 };
  if (!gradeList.includes(grade)) return console.log("Grade not allowed");

  if (grade.toUpperCase() === "A") {
    priceDetail.totalHarga = 4550 * qty;
    priceDetail.potongan = qty > 13 ? 231 * qty : 0;
  } else if (grade.toUpperCase() === "B") {
    priceDetail.totalHarga = 5330 * qty;
    priceDetail.potongan = qty > 7 ? priceDetail.totalHarga * (23 / 100) : 0;
  } else {
    priceDetail.totalHarga = 8653 * qty;
  }

  priceDetail.grandTotal = priceDetail.totalHarga - priceDetail.potongan;

  console.log("Total harga barang: ", priceDetail.totalHarga);
  console.log("Potongan: ", priceDetail.potongan);
  console.log("Total yang harus dibayar: ", priceDetail.grandTotal);
  console.log("=================================================");
  return;
};

hitungBarang("A", 14);
hitungBarang("A", 10);
hitungBarang("B", 5);
hitungBarang("C", 8);
