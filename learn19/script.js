alert('Hallo Arif. Semangat Belajarnya!!');

// Spread Operator
// mengubah array menjadi satu element

// const arr = [1,2,3,"chano"];
// console.log(...arr);

// menggabungkan 2 array
// let arr1 = ["nanao", "gumiho", "trido"]; 
// let arr2 = ["panso", "chano", "Lixo"];
// let result = [...arr1, ...arr2];
// console.log(result); 

// mengcopy isi array
// let arr1 = ["nanao", "gumiho", "trido"];
// let arr2 = [...arr1];
// arr2[0] = "lixo";
// console.log(arr2);


// Rest Paramete
// function arr(...values) {
//     return values;
    // return Array.from(arguments);
// }

// console.log(arr(1,2,3,4));

// penjumlahan dengan rest parameter
// function jumlah(...values) {
//     return values.reduce((acc, val) => acc + val);
// }

// console.log(jumlah(1,2,3,4));

// Array Destructuring
// const kelompok = ["nana", "kina", "sinta", "vina", "trisa"];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(anggota);