alert('Hallo Arif. Semangat Belajarnya!!');

// Tag Templates

const nama = "Chano Luxemburg";
const health = 90;

// param string akan menerima string dan param values akan menerima semua expression. di beri ... agar menapung berapapun expression di dalam literal tag
function bio(strings, ...values) { 
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}


let str = bio`Hallo, nama saya ${nama}, Health poin saya ${health} health`;
console.log(str);