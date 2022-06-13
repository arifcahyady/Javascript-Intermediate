alert('Hallo Arif. Semangat Belajarnya!!');

var penumpang = [];
var tambahPenumpang = function( namaPenumpang) {
    // jika angkot kosong
    if ( penumpang.length == 0 ) {
        // tambah penumpang di kursi baru
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // telusuri setiap kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang
                return penumpang;
            // jika nama penummpang sudah ada 
            } else if( penumpang[i] == namaPenumpang ) {
                console.log(namaPenumpang + ' sudah ada si dalam angkot');
                return penumpang;
            // jika seluruh kursi telah terisi 
            } else if( i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot Masih Kosong');
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
            } else if( i == penumpang.length - 1 ){
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
            return penumpang;   
        }
    }
}
















