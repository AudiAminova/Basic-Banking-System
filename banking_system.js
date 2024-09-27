/* Challange Chapter 2
program ini berfungsi untuk mensimulasikan fitur dasar perbankan.
fitur - fitur yang disediakan dalam program ini, yaitu penyetora, penarikan, dan penambahan bunga pada akun tabungan.
program ini mendefinisikan dua kelas, yaitu BankAccount dan RekeningTabungan.
class BankAccount digunakan untuk menyimpan data akun tabungan dan memiliki method deposit dan withdraw dari akun, 
sedangkan class RekeningTabungan yang merupakan turunan dari class BankAccount digunakan untuk mengatur fitur-fitur yang terkait dengan akun tabungan.
dalam class RekeningTabungan terdapat method tambah_bunga_bank untuk menambah bunga ke saldo akun berdasarkan suku bunga dan jumlah bulan.
*/

class BankAccount {
    constructor(nama, no_rek, saldo) {
        this.nama = nama;
        this.no_rek = no_rek;
        this.saldo = saldo;
    }

/* method deposit untuk menambahkan saldo ke akun user
method ini mengambil parameter amount yaitu jumlah uang yang akan disetor */
deposit(amount) {
    return new Promise((resolve) => {
        setTimeout(() => { // proses ini memakan waktu selama 2 detik
            this.saldo += amount; // amount ditambahkan ke saldo user
            resolve(`~Akun ${this.nama} telah berhasil melakukan deposit sebesar ${amount}.\nSaldo Anda saat ini adalah ${this.saldo}`); // pesan yang ditampilkan setelah saldo ditambahkan
        }, 2000); 
    });
}

/* method withdraw untuk user menarik uang dari akunnya
method ini mengambil parameter amount yaitu jumlah yang ingin ditarik */
withdraw(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // proses ini memakan waktu selama 2 detik
            if (amount > this.saldo) {
                reject('~Maaf, saldo Anda tidak mencukupi untuk melakukan penarikan'); // jika saldo tidak cukup, pesan ini ditampilkan
            } else {
                this.saldo -= amount; // jika saldo cukup, amount dikurangi dari saldo akun user
                resolve(`~Akun ${this.nama} telah berhasil melakukan penarikan sebesar ${amount}.\nSaldo Anda saat ini adalah ${this.saldo}`); // jika saldo cukup, pesan ini ditampilkan
            }
        }, 1000);
    });
    }
}


// child class untuk menghitung suku bunga per tahun yang dinyatakan dalam desimal
class RekeningTabungan extends BankAccount {
    constructor(nama, no_rek, saldo, suku_bunga, jmlh_bulan){
        super(nama, no_rek, saldo); // memanggil constructor parent class
        this.suku_bunga = suku_bunga; // properti untuk persentase bunga
        this.jmlh_bulan = jmlh_bulan; // properti untuk menentukan waktu dalam bentuk jumlah bulan
    }

    // method untuk menambahkan bunga ke saldo user berdasarkan perhitungan suku bunga dan jumlah bulan
    tambah_bunga_bank() {
        return new Promise((resolve) => {
            setTimeout(() => { // proses ini memakan waktu selama 2 detik
                let bunga_bank = this.saldo * (this.suku_bunga / 100) * (this.jmlh_bulan / 12); // rumus menghitung bunga
                this.saldo += parseFloat(bunga_bank.toFixed(2)); // menambahkan saldo dengan hasil perhitungan bunga dengan ditetapkan 2 angka dibelakang koma
                resolve(`~Bunga sebesar ${bunga_bank.toFixed(2)} telah ditambahkan ke akun ${this.nama}.\nSaldo anda saat ini ${this.saldo}`);
            }, 2000);
        });
    }
}

/* membuat objek account1
yaitu nama "Kyungsoo"
nomor rekening "4321"
saldo awal 200000
suku bunga 5%
dalam jangka waktu 2 bulan */
const account1 = new RekeningTabungan("Kyungsoo", "4321", 200000, 5, 2);
account1.deposit(30000) // menyetor 30.000 ke akun Kyungsoo
.then((message) => {
    console.log(message); // menampilkan pesan deposit
    return account1.tambah_bunga_bank(); // menambahkan bunga berdasarkan saldo dan suku bunga
})
.then((message) => {
    console.log(message); // menampilkan pesan suku bunga
    return account1.withdraw(50000); // menarik 10.000 dari akun Kyungsoo
})
.then((message) => {
    console.log(message); // menampilkan pesan witdraw
})
.catch((error) => { // menangani error, saat saldo tidak cukup, maka akan tampil pesan kesalahan
    console.log(error);
});
