let umur= 17;
let punyaKTP= false;
let punyaSIM= false;

//boleh naik motor sendiri jika umur sudah >=17 thn
// Dan sudah punya SIM
let bolehnaikmotor= (umur >=17) && punyaSIM;

//dianggap 'remaja' jika umur sudah >=13 thn atau
//belum punya KTP
let statusremaja= (umur >=13) || !punyaKTP;

console.log('boleh naik motor:', bolehnaikmotor);
console.log('status remaja:', statusremaja);