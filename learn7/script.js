alert('Hallo Arif. Semangat Belajarnya!!');

var hari = ["senin", "selasa", "rabu", "kamis", "jum'at"];

// menampilkan isi array
// for (var i = 0; i < hari.length; i++) {
//     console.log(hari[i]);
// }

// method pada array
// 1. join (mengubah array menjadi satu string)
// console.log(hari.join(' - '));

// 2. push & pop (memasukan dan menghaous element terakhir pada array)
// hari.push("kamis", "jum'at");
// hari.pop();
// console.log(hari.join(' - '));

// 3. unshift & shift (memasukan dan menghapus element pertama pada array)
// hari.unshift("sabtu", "minggu");
// hari.shift();
// console.log(hari.join(' - '));

// 4. splice (memasukan element pada array sesuai index yang di ingin kan)
// splice(index awal, data yang mau di hapus, data baru)
// hari.splice(2, 1, "kamis", "jum'at");
// console.log(hari.join(' - '));

// 5. slice (mengiris sebuah elemnt pada array untuk di jadikn array baru)
// slice(index awal pengirisan, index terakhir pengirisan)
// var arr2 = hari.slice(1,3);
// console.log(arr2.join(' - '));

// 6. forEach & Map (foreach mengembalikan sebuah nilai, sedangkan map mengembalikan array)
var angka = [1,3,5,3,6,7,2,6,10,30];
// angka.forEach( function(e) {
//     console.log(e);
// })

// var arr = angka.map( function(e) {
//     return e * 2;
// })
// console.log(arr.join(' - '))


// 7. sort (mengurutkan element pada array)
// angka.sort( function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 8. filter & find (filter akan mengembalikan sebuah array, sedangkan find mengembalikan nilai dan hanya satu nilai)

// var arr = angka.filter( function(n) {
//     return n >= 4;
// })
// console.log(arr.join(' - '));

var arr = angka.find( function(n) {
    return n >= 4;
})
console.log(arr);








