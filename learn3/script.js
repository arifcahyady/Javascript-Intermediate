var students = 1;
var number = 10;
var present = 6;

// while
while ( students <= present ) {
    console.log('Siswa nomor urut ke. ' + students + ' hadir ke sekolah');
    students++;
}

// for
for( students = present +1; students <= number; students++ ) {
    console.log('Siswa nomor urut ke. ' + students + ' tidak hadir ke sekolah');
}