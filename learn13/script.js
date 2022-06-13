alert('Hallo Arif. Semangat Belajarnya!!');

// Arrow Function
// let tampilNama = (nama) => { return `Hallo ${nama}`};
// console.log(tampilNama('arif'));

// Arrow Function dengan dua parameter
// let tampilNama = (nama, waktu) => { 
//     return `Hallo ${nama}, Selamat ${waktu}`
// };
// console.log(tampilNama('arif', 'malam')); 

// Implisit return( harus dengan 1 parameter dan mengembalikan return )
// let tampilNama = nama => `Hallo ${nama}`;
// console.log(tampilNama('arif'));

// Implisit return tanpa parameter
// let tampilNama = () => `Hello World`;
// console.log(tampilNama());



// let siswa = ["Angga", "Chano Luxemburg", "Nano Dexliburg"];
// let jumlahHuruf = siswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// mengembalaikan data dalam bentuk object
// let jumlahHuruf = siswa.map( nama => ({ nama, jumlahHuruf: nama.length }) );
// console.table(jumlahHuruf);


// konsep this pada arrow function
const Siswa = function() { // dalam function constructor tidak mengenal konsep this
    this.nama = "arif";
    this.health = 20;
    this.greeting = () => { // method di dalam construct function bisa di ubah menjadi arrow function
        // this di sini mengambil nilai dari lexical scope dari variabel parent nya
        console.log(`Hallo nama saya  ${this.nama}, health saya ${this.health}`);
    }

    // jika kita membuat function di dalam construct function yang bukan method, maka penggunaan arrow function akan sangat di perlukan. sehingga this akan mengembalikan nilai dari parent variabel nya

    // setInterval( () =>  {
    //     console.log(this.health++);
    // }, 500);
}

const arif = new Siswa;











