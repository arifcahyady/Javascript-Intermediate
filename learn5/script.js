alert('Hallo Arif. Semangat Belajarnya!!');

// normal function
// function nama() {
//     console.log('Hallo Admin');
// }
// nama();

// function with parameter and argument
// function angka(n) {
//     console.log(n);
// }
// angka(2);

// variabel arguments
// variabel khusus yang akan menampung nilai dari parameter yang di input kan secara otomatis
// function angka() {
//     var hasil = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = angka(5);
// console.log(coba);

// // rekursif function
// // perloopingan function. biasa di gunakan untuk factorial
function faktorial(n) {
    // if di sini untuk menghentikan program atau base case
    if ( n === 0 ) return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(5));