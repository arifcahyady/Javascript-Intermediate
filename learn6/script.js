alert('Hallo Arif. Semangat Belajarnya!!');

// Declaration Function
// function jumlahAngka(n) {
//     if ( n === 0 ) return 1;
//     return n * jumlahAngka(n-1);
// }
// console.log(jumlahAngka(5));

// Ekspression Function
var jumlahAngka = function(n) {
    if ( n === 0 ) return 1;
    return n * jumlahAngka(n-1);
}

var angka = 10;
console.log(angka + jumlahAngka(5));