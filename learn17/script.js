alert('Hallo Arif. Semangat Belajarnya!!');

// Desctructuring / Assignment

// Assignment Array
// const string = ["nano", "chano", "lixo", "trido"];
// const [a,b,c,d] = string;
// console.log(b);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(a)

// rest parameter
// const [a, ...values] =  [1,2,3,4,5];
// console.log(values);

// Assignment Object
// let siswa = {
//     nama: "Chano",
//     health: 30
// }

// const {nama, health} = siswa;
// console.log(nama);

// Destructuring tanpa object
// ({nama, health} = { nama: "Chano", health: 30 });
// console.log(nama);


// mengganti nama properti
// let siswa = {
//     nama: "Chano",
//     health: 30
// }

// const {nama: n, health: h} = siswa;
// console.log(h);


// memberikan default value
// let siswa = {
//     nama: "Chano",
//     health: 30
// }

// const {nama: n, health: h, email: e = 'chano@gmail.com'} = siswa;
// console.log(e);

// memberikan rest parameter
// let siswa = {
//     nama: "Chano",
//     health: 30,
//     email: "chano@gmail.com"
// }

// const {nama, ...values} = siswa;
// console.log(values);

// mengambil field pada object, setelah di kirim sebagai parameter
// let siswa = {
//     id: 321,
//     nama: "Chano",
//     health: 30
// }

// function getId({ id, nama }) {
//     return id;
//     // return nama;
// }

// console.log(getId(siswa));


// Return Value Destructuring Function
// function kalkulasi(a,b) {
//     return {
//         kali: a * b,
//         tambah: a + b,
//         kurang: a - b,
//         bagi: a / b 
//     }
// }

// const {kali,kurang,bagi,tambah} = kalkulasi(3,2);
// console.log(bagi);


// Destructuring Function Arguments
let siswa = {
    id: 321,
    nama: "Chano",
    health: 32,
    skill: {
        programming: 75,
        bahasa: 85
    }
}

function getSiswa({ nama, health, skill: {programming, bahasa} }) {
    return `Hallo nama saya ${nama}, poin health saya ${health} poin. skill programming saya bernilai ${programming} poin`;
}

console.log(getSiswa(siswa));






