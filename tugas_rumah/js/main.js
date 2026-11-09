// =================================
// 1. DATA KEAHLIAN
// =================================

const keahlian = [
    { nama: "HTML", tingkat: "Pemula" },
    { nama: "CSS", tingkat: "Pemula" },
    { nama: "JavaScript", tingkat: "Pemula" },
    { nama: "UI/UX Design", tingkat: "Pemula" }
];

// Menampilkan keahlian
const daftarKeahlian = document.querySelector("#daftar-keahlian");

if (daftarKeahlian) {
    keahlian.forEach((item) => {
        const elemen = document.createElement("p");
        elemen.textContent = item.nama + " - " + item.tingkat;
        daftarKeahlian.appendChild(elemen);
    });
}


// =================================
// 2. TOMBOL MODE GELAP
// =================================

const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("gelap");

        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}


// =================================
// 3. PENGHITUNG KARAKTER
// =================================

const pesan = document.querySelector("#pesan");
const jumlahKarakter = document.querySelector("#jumlah-karakter");

if (pesan && jumlahKarakter) {
    pesan.addEventListener("input", function () {
        jumlahKarakter.textContent =
            pesan.value.length + "/300 karakter";
    });
}


// =================================
// 4. DATA PROYEK
// =================================
const proyek = [
    {
        nama: "Profil",
        kategori: "HTML",
        gambar: "https://github.com/adenhamdanraditya-spec/tugasmodul7/blob/main/tugas_rumah/img/html%20proyek.png?raw=true"
    },
    
    

    {
        nama: "Tabel Jadwal",
        kategori: "HTML",
        gambar: "https://github.com/adenhamdanraditya-spec/tugasmodul7/blob/main/tugas_rumah/img/aden.jpg?raw=true"
    },
    {
        nama: "Portofolio Responsif",
        kategori: "CSS",
        gambar: "https://github.com/adenhamdanraditya-spec/tugasmodul7/blob/main/tugas_rumah/img/responsive.png?raw=true"
    },
    {
        nama: "Kalkulator Nilai",
        kategori: "JavaScript",
        gambar: "https://github.com/adenhamdanraditya-spec/tugasmodul7/blob/main/tugas_rumah/img/kalkulator.png?raw=true"
    }  
];
// =================================
// 5. MENAMPILKAN KARTU PROYEK
// =================================

const daftarProyek = document.querySelector("#daftar-proyek");

function tampilkanProyek(data) {
    if (!daftarProyek) return;

    daftarProyek.innerHTML = data.map((item) => `
        <div class="card-proyek">
            <img src="${item.gambar}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <p>${item.kategori}</p>
        </div>
    `).join("");
}

tampilkanProyek(proyek);

// =================================
// 6. FILTER PROYEK
// =================================

const tombolFilter = document.querySelectorAll(
    "#filter-semua, #filter-html, #filter-css, #filter-js"
);

tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", function () {

        const kategori = tombol.textContent.trim();

        let hasil;

        if (kategori === "Semua") {
            hasil = proyek;
        } else {
            hasil = proyek.filter((item) =>
                item.kategori === kategori
            );
        }

        tampilkanProyek(hasil);

        tombolFilter.forEach((btn) => {
            btn.classList.remove("aktif");
        });

        tombol.classList.add("aktif");
    });
});
