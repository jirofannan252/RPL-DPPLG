// let nilai =[
// [80,75,90],
// [85,70,95],
// [70,80,85]
// ];
// let siswa =['budi','ani','citra',];

// for (let b = 0; b < siswa.length; b++) {
//     let total = 0;
//     for (let k = 0; k < nilai[b].length; k++) {
//         total += nilai[b][k];
//     }
//     let rataRata = total / nilai[b].length;
//         console.log(siswa[b] + ' : total ' + total + ', rata-rata ' + rataRata.toFixed(1));
//     }


let nilai =[
[80,75,90],
[85,70,95],
[70,80,85],
[76,85,90]
];

let siswa =['budi','ani','citra', 'Jiro'];
let mapel = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris'];

for (let b = 0; b < siswa.length; b++) {
    let total = 0;
    for (let k = 0; k < nilai[b].length; k++) {
        total += nilai[b][k];
    }
    let rataRata = total / nilai[b].length;
        console.log(siswa[b] + ' : total ' + total + ', rata-rata ' + rataRata.toFixed(1));
    }

for (let k = 0; k < mapel.length; k++) {
    let total = 0;
    for (let b = 0; b < siswa.length; b++) {
        total += nilai[b][k];
    }
    let rataRata = total / siswa.length;
    console.log(mapel[k] + ' : total ' + total + ', rata-rata ' + rataRata.toFixed(1));
}

console.log(nilai[2][1]);//ambil nilai baris ke 2 kolom 1