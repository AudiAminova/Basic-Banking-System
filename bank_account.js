console.log("Selamat Datang di SkyBank!!");

class SkyBank {
    constructor() {
        this.saldo = 0; // saldo awal
    }

    // method untuk menambah saldo
    tambahSaldo() {
        let inputTambah = window.prompt("Masukkan jumlah yang ingin ditambah: (masukkan angka saja, contoh 100000)");
        let jumlahTambah = Number(inputTambah); // mengkonversi input ke angka
        if (!isNaN(jumlahTambah) && jumlahTambah > 0) {
            this.saldo += jumlahTambah;
        } else {
            console.log("Input tidak valid! Masukkan angka yang benar.");
        }
        return this.saldo;
    }

    // method untuk mengurangi saldo
    kurangiSaldo() {
        let inputKurang = window.prompt("Masukkan jumlah yang ingin dikurangi: (masukkan angka saja, contoh 100000)");
        let jumlahKurang = Number(inputKurang); // mengkonversi input ke angka
        if (!isNaN(jumlahKurang) && jumlahKurang > 0 && jumlahKurang <= this.saldo) {
            this.saldo -= jumlahKurang;
        } else {
            console.log("Input tidak valid atau saldo tidak cukup!");
        }
        return this.saldo;
    }

    // method untuk menampilkan opsi kepada user
    opsi() {
        let pilihan = window.prompt("Pilih opsi berikut: \n1. Tambah Saldo\n2. Kurangi Saldo \nMasukkan pilihan anda: ");
        if (pilihan == 1) {
            return this.tambahSaldo();
        } else if (pilihan == 2) {
            return this.kurangiSaldo();
        } else {
            console.log("Pilihan tidak tersedia!!");
            return this.saldo;
        }
    }
}

// membuat objek dari class SkyBank
let bank = new SkyBank();
let saldoBaru = bank.opsi();
console.log(`Saldo anda saat ini: ${saldoBaru}`);