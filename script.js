const kodeBarangInput = document.getElementById("kode-barang");
const jumlahBarangInput = document.getElementById("jumlah-barang");

const table = document.querySelector("table");

const form = document.querySelector("form");

const alert = document.querySelector(".alert");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const kodeBarang = kodeBarangInput.value;
  const jumlahBarang = jumlahBarangInput.value;

  const baris = table.querySelector(`tr[data-kode="${kodeBarang}"]`);

  const harga = parseInt(baris.querySelector("td:last-child").textContent);

  const totalHarga = harga * jumlahBarang;

  alert.innerHTML = `Total harga: Rp${totalHarga.toLocaleString()}`;

  alert.style.display = "block";

  alert.querySelector(".btn-ok").addEventListener("click", function () {
    const uang = prompt("Masukkan uang yang digunakan untuk membeli barang:");

    const jumlahKembalian = parseInt(uang) - totalHarga;

    alert.innerHTML = `Total harga: Rp${totalHarga.toLocaleString()}<br>Jumlah kembalian: Rp${jumlahKembalian.toLocaleString()}`;

    alert.style.display = "block";

    alert.querySelector(".btn-ok").addEventListener("click", function () {
      alert.innerHTML = "Pembelian berhasil!";

      alert.style.display = "block";
    });
  });
});
