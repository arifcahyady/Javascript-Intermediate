// pop up box javascript
alert('Hallo Admin');
var nama = prompt('masukan nama : ');
confirm('kamu yakin?');

// example pop up box case
alert('Selamat Datang');
var lagi = true;
while( lagi ) {
    var nama = prompt('masukan nama :');
    alert('Hallo' + ' ' + nama);

    lagi = confirm('ingin coba lagi ?');
}

alert('terima kasih!!')