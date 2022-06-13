alert('Hallo Arif. Semangat Belajarnya!!');

// Object.create()
// pewarisan object pada javascript. Dapat menyertakan induk dari sebuah metode ke dalam object yang di inginkan


const metodeSiswa = {
    makan: function(porsi) {
        this.health += porsi;
        console.log(`Hallo ${this.nama} selamat makan`);
    },

    main: function(jam) {
        this.health -= jam;
        console.log(`hallo ${this.nama} selamat bermain`);

    },

    tidur: function(jam) {
        this.health += jam * 2;
        console.log(`Hallo ${this.nama} selamat tidur`);
    }

}

function Siswa(nama, health) {
    let siswa = Object.create(metodeSiswa);
    siswa.nama = nama;
    siswa.health = health;

    return siswa;   
}
let arif = Siswa('arif', 20);