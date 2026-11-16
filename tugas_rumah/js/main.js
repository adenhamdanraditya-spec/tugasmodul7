
// =================================
// 1. MENGAMBIL DATA KEAHLIAN JSON
// =================================

async function ambilKeahlian() {
    try {
        const response = await fetch("data/keahlian.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data keahlian");
        }

        const keahlian = await response.json();

        const daftarKeahlian = document.querySelector("#daftar-keahlian");

        if (daftarKeahlian) {
            daftarKeahlian.innerHTML = "";

            keahlian.forEach(item => {
                const elemen = document.createElement("p");
                elemen.textContent = item.nama + " - " + item.tingkat;
                daftarKeahlian.appendChild(elemen);
            });
        }

        console.log("Data keahlian berhasil:", keahlian);

    } catch (error) {
        console.error(error);
    }
}

ambilKeahlian();


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
// 4. MENGAMBIL DATA PROYEK JSON
// =================================

let semuaProyek = [];

async function ambilDataProyek() {
    try {
        const response = await fetch("data/proyek.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data proyek");
        }

        semuaProyek = await response.json();

        console.log("Data Proyek:", semuaProyek);

        tampilkanProyek(semuaProyek);
        aktifkanFilter();

    } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
    }
}


// =================================
// 5. MENAMPILKAN KARTU PROYEK
// =================================

const daftarProyek = document.querySelector("#daftar-proyek");

function tampilkanProyek(data) {
    if (!daftarProyek) return;

    daftarProyek.innerHTML = "";

    data.forEach(item => {
        const kartu = document.createElement("div");
        kartu.className = "card-proyek";

        const gambar = document.createElement("img");
        gambar.src = item.gambar;
        gambar.alt = item.nama;

        const judul = document.createElement("h3");
        judul.textContent = item.nama;

        const kategori = document.createElement("p");
        kategori.textContent = item.kategori;

        const deskripsi = document.createElement("p");
        deskripsi.textContent = item.deskripsi || "";

        kartu.append(gambar, judul, kategori, deskripsi);
        daftarProyek.appendChild(kartu);
    });
}


// =================================
// 6. FILTER PROYEK
// =================================

function aktifkanFilter() {
    const tombolFilter = document.querySelectorAll(
        "#filter-semua, #filter-html, #filter-css, #filter-js"
    );

    tombolFilter.forEach(tombol => {
        tombol.addEventListener("click", function () {

            const kategori = tombol.textContent.trim();

            let hasil;

            if (kategori === "Semua") {
                hasil = semuaProyek;
            } else {
                const kategoriTarget =
                    kategori === "JS" ? "JavaScript" : kategori;

                hasil = semuaProyek.filter(item =>
                    item.kategori === kategoriTarget
                );
            }

            tampilkanProyek(hasil);

            tombolFilter.forEach(btn => {
                btn.classList.remove("aktif");
            });

            tombol.classList.add("aktif");
        });
    });
}

ambilDataProyek();


// =================================
// 7. MENGAMBIL DATA GITHUB API
// =================================

 
// =================================
// 7. MENGAMBIL DATA GITHUB API
// =================================


// =================================
// 7. MENGAMBIL DATA GITHUB API
// =================================

async function ambilGithub() {
    const daftarGithub = document.querySelector("#daftar-github");
    const username = "adenhamdanraditya-spec";

    if (!daftarGithub) return;

    try {
        daftarGithub.innerHTML = "<p>Memuat repositori...</p>";

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=5`
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data: " + response.status);
        }

        const repositori = await response.json();

        daftarGithub.innerHTML = `
            <p>${repositori.length} repositori yang terakhir diperbarui.</p>
            <ul id="list-github"></ul>
        `;

        const listGithub = document.querySelector("#list-github");

        repositori.forEach(repo => {
            const item = document.createElement("li");

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.textContent = repo.name;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            item.appendChild(link);
            listGithub.appendChild(item);
        });

    } catch (error) {
        daftarGithub.textContent = "Gagal memuat repositori GitHub.";
        console.error("Error GitHub:", error);
    }
}

ambilGithub();
