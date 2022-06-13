var number = 10;
var present = 6;

// if else
// for( students; students <= number; students++) {
//     if (students <= present) {
//         console.log('Siswa no urut ke ' + students + ' hadir ke sekolah');
//     } else {
//         console.log('Siswa no urut ke ' + students + ' tidak hadir ke sekolah');
//     }
// }

// if else if else
for( var students = 1; students <= number; students++) {
    if (students <= present && students !== 5) {
        console.log('Siswa no urut ke ' + students + ' hadir ke sekolah');
    } else if ( students == 8 || students == 10 ){
        console.log('Siswa no urut ke ' + students + ' sedang di skors');
    } else {
        console.log('Siswa no urut ke ' + students + ' tidak hadir ke sekolah');
    }
}

// switch case
var key = prompt('masukan angka : ')

switch ( key ) {
    case '1': console.log('ini angka 1')
        
        break;

    default: console.log('ini bukan angka')
        break;
}