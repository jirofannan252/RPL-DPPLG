// let teman = ["budi", "Ani", "Citra", "Dedi", "Eka"];

// console.log ('Jumblah teman: ' + teman.length);
// console.log ('Teman pertama: ' + teman[0]);
// console.log ('Teman terakhir: ' + teman[teman.length - 1]);

// for (let i = 0; i < teman.lenght; i++) {
//     console.log ((1 + i) + '. ' + teman[i]);
// }

let nilai = [90, 80, 70, 60, 50];

let total = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}
console.log('Total nilai: ' + total);

let rataRata = total / nilai.length;
console.log('Rata-rata nilai: ' + rataRata);

let nilaiTertinggi = nilai[0];
for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai[i];
    }
}
console.log('Nilai tertinggi: ' + nilaiTertinggi);

let nilaiTerendah = nilai[0];
for (let i = 1; i < nilai.length; i++) {
    if (nilai[i] < nilaiTerendah) {
        nilaiTerendah = nilai[i];
    }
}
console.log('Nilai terendah: ' + nilaiTerendah);

let campur = ['budi', 16, true, 3.5];

for (let i = 0; i < campur.length; i++) {
    console.log('Data ke-' , (i + 1) , ': ' , campur[i] , ' tipe data: ' , typeof campur[i] );
}
