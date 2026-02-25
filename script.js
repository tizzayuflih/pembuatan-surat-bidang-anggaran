// ================== BUAT SURAT ==================
// ================== UTILITY ==================
function mmToPx(mm) {
    return mm * 3.78; // 1 mm ≈ 3.78 px
}
function buatSurat() {
    // Ambil nilai dari form
    let yth = document.getElementById("yth").value;
    let lewat = document.getElementById("lewat").value;
    let dari = document.getElementById("dari").value;
    let tanggal = document.getElementById("tanggal").value;
    let nomor = document.getElementById("nomor").value;
    let sifat = document.getElementById("sifat").value;
    let lampiran = document.getElementById("lampiran").value;
    let hal = document.getElementById("hal").value;
    let kecamatan = document.getElementById("kecamatan").value;
    let kegiatan = document.getElementById("kegiatan").value;

    // Pengaturan cetak
    let font = document.getElementById("font").value;
    let fontSize = document.getElementById("fontSize").value;
    let lineSpacing = document.getElementById("lineSpacing").value;
    let marginAtas = document.getElementById("marginAtas").value;
    let marginBawah = document.getElementById("marginBawah").value;
    let marginKiri = document.getElementById("marginKiri").value;
    let marginKanan = document.getElementById("marginKanan").value;

    // Konversi margin mm → px untuk preview
    let paddingAtas = mmToPx(marginAtas);
    let paddingBawah = mmToPx(marginBawah);
    let paddingKiri = mmToPx(marginKiri);
    let paddingKanan = mmToPx(marginKanan);

    // Paraf koordinasi
    let pakaiParaf = document.getElementById("pakaiParaf")?.checked;
    let tabelParaf = "";
    if (pakaiParaf) {
        let jumlah = parseInt(document.getElementById("jumlahPejabat").value) || 0;
        tabelParaf += `<div style="margin-top:40px; width:45%;">
            <table style="width:100%; border-collapse:collapse; border:1px solid black; font-size:11pt;">
                <tr>
                    <td colspan="2" style="border:1px solid black; text-align:center;">
                        Telah di Koordinasikan
                    </td>
                </tr>
                <tr>
                    <td style="border:1px solid black; text-align:center;font-weight:bold;">Pejabat</td>
                    <td style="border:1px solid black; text-align:center;font-weight:bold;">Paraf</td>
                </tr>`;
        for (let i = 1; i <= jumlah; i++) {
            let nama = document.getElementById("pejabat" + i)?.value || "";
            tabelParaf += `<tr>
                <td style="border:1px solid black; padding:5px;">${nama}</td>
                <td style="border:1px solid black;"></td>
            </tr>`;
        }
        tabelParaf += `</table></div>`;
    }

    // Bangun isi surat
    let isi = `
    <div class="halaman" style="
        font-family:${font};
        font-size:${fontSize}pt;
        line-height:${lineSpacing};
        width:210mm;        /* default A4 */
        min-height:auto;   /* default A4 */
        box-sizing:border-box;
        padding:${paddingAtas}px ${paddingKanan}px ${paddingBawah}px ${paddingKiri}px;
    ">
        <div style="width:85%; margin:0 auto 15px auto;">
            <table style="width:100%; border-collapse:collapse;">
                <tr><td style="width:120px;">Yth.</td><td style="width:10px;">:</td><td>${yth}</td></tr>
                <tr><td>Lewat</td><td>:</td><td>${lewat}</td></tr>
                <tr><td>Dari</td><td>:</td><td>${dari}</td></tr>
                <tr><td>Tanggal</td><td>:</td><td>${tanggal}</td></tr>
                <tr><td>Nomor</td><td>:</td><td>${nomor}</td></tr>
                <tr><td>Sifat</td><td>:</td><td>${sifat}</td></tr>
                <tr><td>Lampiran</td><td>:</td><td>${lampiran}</td></tr>
                <tr><td>Hal</td><td>:</td><td>${hal}</td></tr>
            </table>
        </div>

        <hr style="border:none;border-top:2px solid black;margin:10px 0;">

        <p style="text-align:center; margin-top:20px;">
            LAPORAN TENTANG<br>
            PERGESERAN DOKUMEN PELAKSANAAN ANGGARAN PADA<br>
            KECAMATAN ${kecamatan.toUpperCase()}
        </p>

        <div style="margin-left:0px;">
            <p><strong>A. Pendahuluan</strong></p>

            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">1.</td>
                    <td style="width:180px; vertical-align:top;">Umum/Latar belakang</td>
                    <td style="width:10px; vertical-align:top;">:</td>
                    <td style="text-align:justify;">
                        Dalam rangka pergeseran dokumen pelaksanaan anggaran 
                        pada Kecamatan ${kecamatan}.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:20px; vertical-align:top;">2.</td>
                    <td style="vertical-align:top;">Landasan Hukum</td>
                    <td style="vertical-align:top;">:</td>
                    <td style="text-align:justify;">
                        Surat Kecamatan ${kecamatan} Nomor ${nomor} 
                        tanggal ${tanggal}.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:20px; vertical-align:top;">3.</td>
                    <td style="vertical-align:top;">Maksud dan Tujuan</td>
                    <td style="vertical-align:top;">:</td>
                    <td style="text-align:justify;">
                        Pergeseran anggaran sub kegiatan ${kegiatan} 
                        pada Kecamatan ${kecamatan}.
                    </td>
                </tr>
            </table>
           
            <p><strong>B. Hasil yang Dicapai</strong></p>
            <p style="text-align:justify; margin-left: 20px;">
                Pergeseran dokumen pelaksanaan anggaran sub kegiatan 
                ${kegiatan} pada Kecamatan ${kecamatan}.
            </p>


            <p><strong>C. Simpulan</strong></p>

            <!-- 1 -->
            <table style="width:100%; border-collapse:collapse;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">1.</td>
                    <td style="text-align:justify;">
                        Berdasarkan Permendagri Nomor 77 Tahun 2020 tentang Pedoman Teknis
                        Pengelolaan Keuangan Daerah bahwa pergeseran anggaran terdiri atas:
                    </td>
                </tr>
            </table>

            <table style="width:100%; border-collapse:collapse; margin-top:4px;">
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        a.
                    </td>
                    <td style="text-align:justify;">
                        Pergeseran anggaran yang menyebabkan perubahan APBD;
                    </td>
                </tr>
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        b.
                    </td>
                    <td style="text-align:justify;">
                        Pergeseran anggaran yang tidak menyebabkan perubahan APBD.
                    </td>
                </tr>
            </table>

            <!-- 2 -->
            <table style="width:100%; border-collapse:collapse; margin-top:5px;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">2.</td>
                    <td style="text-align:justify;">
                        Pergeseran anggaran yang menyebabkan perubahan APBD meliputi pergeseran
                        antar organisasi, antar unit organisasi, antar program, antar kegiatan,
                        antar sub kegiatan, antar kelompok, dan antar jenis belanja.
                    </td>
                </tr>
            </table>

            <!-- 3 -->
            <table style="width:100%; border-collapse:collapse; margin-top:5px;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">3.</td>
                    <td style="text-align:justify;">
                        Pergeseran anggaran yang tidak menyebabkan perubahan APBD meliputi:
                    </td>
                </tr>
            </table>

            <table style="width:100%; border-collapse:collapse; margin-top:3px;">
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        a.
                    </td>
                    <td style="text-align:justify;">
                        Pergeseran antar objek dalam jenis yang sama atas persetujuan Sekretaris Daerah.
                    </td>
                </tr>
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        b.
                    </td>
                    <td style="text-align:justify;">
                        Pergeseran antar rincian objek dalam objek yang sama atas persetujuan PPKD.
                    </td>
                </tr>
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        c.
                    </td>
                    <td style="text-align:justify;">
                        Pergeseran antar sub rincian objek dalam rincian objek yang sama atas persetujuan PPKD.
                    </td>
                </tr>
                <tr>
                    <td style="width:55px; vertical-align:top; text-align:right; padding-right:6px;">
                        d.
                    </td>
                    <td style="text-align:justify;">
                        Perubahan atau pergeseran uraian sub rincian objek atas persetujuan Pengguna Anggaran.
                    </td>
                </tr>
            </table>
            <!-- 4 -->
            <table style="width:100%; border-collapse:collapse; margin-top:5px;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">4.</td>
                    <td style="text-align:justify;">
                        Berdasarkan DPA SKPD Belanja Dinas Perdagangan, Perindustrian dan Tenaga Kerja
                        Tahun Anggaran 2026 untuk Sub Kegiatan Penyediaan Jasa Pelayanan Umum Kantor
                        mengalami perubahan antar rincian objek belanja Belanja Jasa Tenaga
                        Administrasi (Asisten Pribadi Pimpinan) dan Belanja Tenaga Administrasi
                        (Penarik Retribusi/Penagih Pajak).
                    </td>
                </tr>
            </table>

            <!-- 5 -->
            <table style="width:100%; border-collapse:collapse; margin-top:5px;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">5.</td>
                    <td style="text-align:justify;">
                        Terkait surat dari Dinas Perdagangan, Perindustrian dan Tenaga Kerja Kabupaten
                        Karanganyar perihal Permohonan Pergeseran Anggaran TA 2026 pada Dokumen
                        Pelaksanaan Anggaran TA 2026, perubahan rekening tersebut merupakan
                        pergeseran antar rincian objek dalam objek yang sama sehingga termasuk
                        pergeseran anggaran yang tidak menyebabkan perubahan APBD. Oleh karena itu,
                        pergeseran ini dapat dilakukan atas persetujuan PPKD.
                    </td>
                </tr>
            </table>

            <!-- 6 -->
            <table style="width:100%; border-collapse:collapse; margin-top:5px;">
                <tr>
                    <td style="width:20px; padding-left:20px; vertical-align:top;">6.</td>
                    <td style="text-align:justify;">
                        Dalam penyusunan pergeseran DPA agar memperhatikan Standar Harga sesuai
                        ketentuan peraturan perundang-undangan yang berlaku.
                    </td>
                </tr>
            </table>

            <p><strong>D. Penutup</strong></p>
            <p style="text-align:justify; margin-left: 20px;">
                Demikian untuk menjadikan periksa dan selanjutnya mohon petunjuk.
            </p>
            
            <!-- TTD -->
            <div style="margin-top:60px; width:33%; margin-left:auto; text-align:left;">
                <p>Kepala Bidang Anggaran</p>

                <br><br><br> <!-- ruang tanda tangan -->

                <p><strong>Agung Joko Wiyaso</strong><br>
                Pembina<br>
                NIP. 19780819 199711 1 001</p>
            </div>
            ${tabelParaf}
        </div>
    `;

    document.getElementById("hasilSurat").innerHTML = isi;

// Munculkan tombol
    document.getElementById("hasilSection").style.display = "block";
    document.getElementById("btnCetak").style.display = "block";
    document.getElementById("btnPDF").style.display = "block";
    }

// ================== CETAK & PDF ==================
function cetakSurat() {
    let ukuranKertas = document.getElementById("ukuranKertas").value;
    let marginAtas = document.getElementById("marginAtas").value;
    let marginBawah = document.getElementById("marginBawah").value;
    let marginKiri = document.getElementById("marginKiri").value;
    let marginKanan = document.getElementById("marginKanan").value;

    let sizePage = "A4";
    if (ukuranKertas === "F4") sizePage = "210mm 330mm";
    if (ukuranKertas === "Letter") sizePage = "Letter";

    let oldStyle = document.getElementById("dynamicPrintStyle");
    if (oldStyle) oldStyle.remove();

    let style = document.createElement("style");
    style.id = "dynamicPrintStyle";
    style.innerHTML = `
        @media print {

            @page {
                size: ${sizePage};
                margin: ${marginAtas}mm ${marginKanan}mm ${marginBawah}mm ${marginKiri}mm;
            }

            body {
                margin: 0;
            }

            .halaman {
                padding: 0 !important;   /* ⛔ MATIKAN padding preview */
                margin: 0 !important;
                width: 100% !important;
                box-sizing: border-box;
            }
        }
    `;
    document.head.appendChild(style);

    window.print();
}

// ================== GENERATE INPUT PEJABAT ==================
document.addEventListener("DOMContentLoaded", function() {
let jumlahInput = document.getElementById("jumlahPejabat");
if (jumlahInput) {
    jumlahInput.addEventListener("input", function() {
        let jumlah = parseInt(this.value) || 0;
        let container = document.getElementById("daftarPejabat");
        container.innerHTML = "";
        for (let i = 1; i <= jumlah; i++) {
            container.innerHTML += `
                <label>Nama Pejabat ${i}</label>
                <input type="text" id="pejabat${i}" placeholder="Contoh: Kasubid BKD">
            `;
        }
    });
}
});

// ================== GANTI JENIS SURAT ==================
function gantiJenisSurat() {
    let jenis = document.getElementById("jenisSurat").value;
    let isiWrapper = document.getElementById("isiSuratWrapper");
    let btnBuat = document.getElementById("btnBuatSurat");

    if (jenis === "pergeseran") {
        isiWrapper.style.display = "flex";
        btnBuat.style.display = "block";
    } else {
        isiWrapper.style.display = "none";
        btnBuat.style.display = "none";
    }
    }