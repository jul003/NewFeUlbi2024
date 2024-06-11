
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-jul2024-bdc7cc35640a.herokuapp.com/presensi/" + presensiId;