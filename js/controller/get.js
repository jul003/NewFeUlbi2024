import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

var MyVar = {};

export function isiTablePresensi(results) {
    MyVar.length = results.length;
    results.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    results.forEach(isiRow);
}

function isiRow(value) {
    document.getElementById("jml").textContent = MyVar.length + " Data";
    
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi + " Jam" : "Belum diatur")
            .replace("#JAMMASUK", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk + " WIB" : "Belum diatur")
            .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar + " WIB" : "Belum diatur")
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}