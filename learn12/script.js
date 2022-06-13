alert('Hallo Arif. Semangat Belajarnya!!');

// Closure
// Hubungan antara function dengan lexical scope nya

// function init() {
//     let nama = "Arif Cahyady"; // local variabel || parent variabel
//     function panggilNama() { // inner function || closure
//         console.log(nama); // nama dia ambil dari parent variabel
//     }
//     panggilNama(); // jalankan function dengan hoisting
// }
// init(); // jalankan function dengan hoisting


// modifikasi kode program
// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Erik kurniawan');



// function factori
// function greeting(waktu) {
//     return function(nama) {
//         console.log(`Hallo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = greeting('Pagi');
// let selamatSiang = greeting('Siang');
// let selamatMalam = greeting('Malam');

// selamatPagi('Arif');





// immidiately invoc function
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})(); // function langsung di jalankan tanpa harus menyimpannya ke dalam variabel

console.log(add());
console.log(add());