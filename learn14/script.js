alert('Hallo Arif. Semangat Belajarnya!!');

const angka = [7,12,2,9,-5,-9,5,2,-5,-7];

// filter
// cari angka >= dua
// let newNumber = angka.filter( n => n >= 2);
// console.log(newNumber);

// map
// setiap element ke-n di kalikan 2
// let newNumber = angka.map( n => n * 2 );
// console.log(newNumber);

// reduce
// const newNumber = angka.reduce((acc, curr) => acc + curr, 0);
// console.log(newNumber);

// methode chaining
// penggabungan lebih dari satu function
let result = angka.filter( n => n > 5 )
 .map( n => n * 2 )
 .reduce((acc, curr) => acc + curr);
 console.log(result);