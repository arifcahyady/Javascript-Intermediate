alert('Hallo Arif. Semangat Belajarnya!!');

// membuat object
// 1. object literal
// let siswa = {
//     nama: 'Arif Cahyady',
//     health: 10,
//     makan: function(porsi) {
//         this.health += porsi;
//         console.log(`Hallo ${this.nama} selamat makan!`);
//     },

//     main: function(jam) {
//         this.health -= jam;
//         console.log(`hallo ${this.nama} selamat bermain`);
//     }
// }

// 2.function declaration object
function Siswa(nama, health) {
    let siswa = {};
    siswa.nama = nama;
    siswa.health = health;

    siswa.makan = function(porsi) {
        this.health += porsi;
        console.log(`Hallo ${this.nama} selamat makan`);
    }

    siswa.main =  function(jam) {
        this.health -= jam;
        console.log(`hallo ${this.nama} selamat bermain`);

    }
    return siswa;   
}
let Arif = Siswa('arif', 20);


// 3. constructor
// function Siswa(nama, health) {
//         this.nama = nama;
//         this.health = health;
    
//         this.makan = function(porsi) {
//             this.health += porsi;
//             console.log(`Hallo ${this.nama} selamat makan`);
//         }
    
//         this.main =  function(jam) {
//             this.health -= jam;
//             console.log(`hallo ${this.nama} selamat bermain`);
    
//         }   
//     }

// let Arif = new Siswa('arif', 20);