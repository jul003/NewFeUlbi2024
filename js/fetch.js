import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-jul2024-bdc7cc35640a.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}