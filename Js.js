// var x = 5;
// var y = 6;
// var z = 7;

// var temp = x;
// x = y;
// y = z;
// z = temp;

// console.log(x);
// console.log(y);
// console.log(z);

var r1 = 0.7;
var r2 = 0.4;
var r3 = 0.2;
var p_d = 100;
var VAT = 1.18;

// Calculate price per kilometer

var kilometer = 1500;
var total_kilo_price = 0;

while (kilometer > 0) {
  if (kilometer > 1000) {
    let diff = kilometer - 1000;
    total_kilo_price = diff * r3;
    kilometer -= diff;
  }
  if (kilometer >= 100 && kilometer < 1000) {
    let diff = kilometer - 100;
    total_kilo_price = diff * r2;
    kilometer -= diff;
  }
  if (kilometer <= 100) {
    total_kilo_price = kilometer * r1;
  }
}

console.log(total_kilo_price);
