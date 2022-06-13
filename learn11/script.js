alert('Hallo Arif. Semangat Belajarnya!!');

// Prototype
// sebuah metode default yang telah di buat di dalam javascript


// buat object constructor
// function Siswa(nama, health) {
//     // yang terjadi di belakang layar
//     // let this = Object.create(Siswa.prototype);
//     this.nama = nama;
//     this.health = health;
// }

// sehingga kita bisa memanggil metode dengan cara
// Siswa.prototype.makan = function(porsi) {
//     this.health += porsi;
//     return `Hallo ${this.nama} selamat makan`;
// }

// Siswa.prototype.main = function(jam) {
//     this.health -= jam;
//     return `hallo ${this.nama} selamat bermain`;
// }

// Siswa.prototype.tidur = function(jam) {
//     this.health += jam * 2;
//     return `hallo ${this.nama} selamat tidur`;
// }


// let arif = new Siswa('arif', 20);

// versi class
class Siswa {
    constructor(nama, health) {
        this.nama = nama;
        this.health = health;
    }
    makan(porsi) {
        this.health += porsi;
        return `Hallo ${this.nama} selamat makan`;
    }

    main(jam) {
        this.health -= jam;
        return `hallo ${this.nama} selamat bermain`;
    }

    tidur = function(jam) {
        this.health += jam * 2;
        return `hallo ${this.nama} selamat tidur`;
    }
}

let arif = new Siswa('arif', 20);