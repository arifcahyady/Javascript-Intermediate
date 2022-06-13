alert('Hallo Arif. Semangat Belajarnya!!');

// For of

// For of Array
// let siswa = [1,2,3, "Chano", true];
// for (const n of siswa) {
//     console.log(n);
// }


// For of String
// const str = "Chano";
// for (const n of str) {
//     console.log(n);
// }

// For of Arguments
// function siswa() {
//     for (const n of arguments) {
//         console.log(n);
//     }
// }

// let arr = siswa(1,2,3);

// For in (melooping object)
const siswa = {
    nama: "Chano",
    health: 30
}

for (const n in siswa) {
    console.log(siswa[n]);
}



