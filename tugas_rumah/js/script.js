
const tombol = document.getElementById("btnHitung");

tombol.addEventListener("click", function() {

    let tugas = document.getElementById("tugas").value;
    let uts = document.getElementById("uts").value;
    let uas = document.getElementById("uas").value;

    let hasil = document.getElementById("hasil");

    if (tugas === "" || uts === "" || uas === "") {
        alert("Silakan isi semua nilai terlebih dahulu!");
        return;
    }

    tugas = Number(tugas);
    uts = Number(uts);
    uas = Number(uas);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada antara 0 sampai 100!");
        return;
    }

    let nilaiAkhir = (tugas + uts + uas) / 3;

    let predikat;

    if (nilaiAkhir >= 90) {
        predikat = "A (Sangat Baik)";
    } else if (nilaiAkhir >= 80) {
        predikat = "B (Baik)";
    } else if (nilaiAkhir >= 70) {
        predikat = "C (Cukup)";
    } else {
        predikat = "D (Perlu Belajar Lagi)";
    }

    hasil.style.display = "block";

    hasil.innerHTML = `
        <strong>Hasil Perhitungan</strong><br>
        Nilai Tugas: ${tugas}<br>
        Nilai UTS: ${uts}<br>
        Nilai UAS: ${uas}<br>
        <hr>
        Nilai Akhir: <strong>${nilaiAkhir.toFixed(2)}</strong><br>
        Predikat: <strong>${predikat}</strong>
    `;

});
