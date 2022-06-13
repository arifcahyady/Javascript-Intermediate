alert('Hallo Arif. Semangat Belajarnya!!');

// Template Literals Back Tick
// let nama = "admin";
// let umur = 23;

// console.log(`Hallo nama saya ${nama}, Saya berumur ${umur} tahun`);

// Embeded Expression
// const x = 11;
// console.log(`${( x % 2 == 0 ) ? 'genap' : 'ganjil'}`);
// console.log(`${ 2 * 2 }`);

// HTML Fragments
// const siswa = {
//     nama: "admin",
//     health: 30,
// }

// let nano = `<div class="siswa">
//     <h2>${siswa.nama}</h2>
//     <span class="siswa">${siswa.health}</span>
// </div>`;

// console.log(nano);

// Looping
// const siswa = [
//     {
//         nama: "arif cahyady",
//         email: "arif@gmail.com"
//     },
//     {
//         nama: "Chano luxembirg",
//         email: "chano@gmail.com"
//     },
//     {
//         nama: "nano dexburg",
//         email: "nano@gmail.com"
//     }
// ]

// const el = `<div class="siswa">
//     ${siswa.map( key => `
//         <ul>
//             <li>${key.nama}</li>
//             <li>${key.email}</li>
//         </ul>
//     `).join('')}
// </div>`;


// Condition
// const lagu = {
//     penyanyi: "chano",
//     judul: "trembesi kontrasi flumburg"
// }

// let el = `<div class="lagu">
//     <h2>Penyanyi: ${lagu.penyanyi}</h2>
//     <span>Judul: ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</span>
// </div>`;



// HTML Fragment Bersarang
const siswa = {
    nama: "Chano luxembirg",
    health: 90,
    skill: ['programming', 'UI/UX', 'Administrator']
}

const el = `<div class="siswa">
    <h2>${siswa.nama}</h2>
    <span>Poin : ${siswa.health}</span>
    <div>Keahlian :</div>
    <ol>
        ${siswa.skill.map( key => `<li>
            ${key}
        </li>`).join('')}
    </ol>
</div>`;



document.body.innerHTML = el;