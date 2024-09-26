console.log("Selamat Datang di SkyBank!!");

let saldoAwal = 0;

// function untuk menambah saldo
function tambahSaldo() {
    let inputTambah = window.prompt("Masukkan jumlah yang ingin ditambah: (masukkan angka saja, contoh 100000)");
    let jumlahTambah = Number(inputTambah); //mengkonversi input ke angka
    saldoAwal += (jumlahTambah > 0) * jumlahTambah; // menjumlahkan saldo
    return saldoAwal;
};

// function untuk mengurangi saldo
function kurangiSaldo() {
    let inputKurang = window.prompt("Masukkan jumlah yang ingin dikurangi: (masukkan angka saja, contoh 100000)");
    let jumlahKurang = Number(inputKurang); //mengkonversi input ke angka
    saldoAwal -= (jumlahKurang > 0) * jumlahKurang; // menjumlahkan saldo
    return saldoAwal;
};

// menampilkan pilihan kepada user
function opsi() {
    let pilihan = window.prompt("Pilih opsi berikut: \n1. Tambah Saldo\n2. Kurangi Saldo \nMasukkan pilihan anda: ");
    if (pilihan == 1) {
        return tambahSaldo();
    } else if (pilihan == 2) {
        return kurangiSaldo();
    } else {
        console.log("Pilihan tidak tersedia!!")
        return saldoAwal
    }
};

let saldoBaru = opsi();
console.log(`Saldo anda saat ini: ${saldoBaru}`);