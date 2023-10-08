// Hamburger Menu
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Loading screen
const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// confirm pindah web
const vid = document.getElementById("vid");
const artikelID = document.getElementById("artikel");
const socialMedia = document.getElementById("social");

const myFunction = (e) => {
    if(!confirm('Apakah anda yakin ingin meninggalkan halaman ini?')) e.preventDefault();
}

vid.addEventListener('click', myFunction, false);
artikelID.addEventListener('click', myFunction, false);
socialMedia.addEventListener('click', myFunction, false);
// --------------------------------------------------------------------------------------------//
const API_BASE_URL = 'https://be-balikpapan-32-production.up.railway.app';

// GET ARTIKEL
fetch(`${API_BASE_URL}/artikel/`)
.then(function(response) {
    // Periksa apakah responsenya berhasil (kode status 200)
    if (!response.ok) {
        throw new Error('Ada masalah saat mengambil data.');
    }
    
    // Konversi responsenya ke JSON
    return response.json();
    })
    .then(function(data) {
    // Data JSON tersedia di sini
    console.log(data);
    //Menampilkan di halaman web
    data.forEach(data => {
        const divArtikel = document.querySelector(".artikel-content");
    
        divArtikel.innerHTML = divArtikel.innerHTML + `
        <a href="${data.link_artikel}">
            <div class="card">
                <div class="head-card">
                    <img src="${data.image}" alt="${data.judul}">
                </div>
                <div class="body-card">
                    <h1>${data.judul}</h1>
                    <p>${data.deskripsi}</p>
                </div>
            </div>
        </a>
        `
    });
    })
    .catch(function(error) {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
    });

// GET VIDEO
fetch(`${API_BASE_URL}/vidio/`)
.then(function(response) {
    // Periksa apakah responsenya berhasil (kode status 200)
    if (!response.ok) {
        throw new Error('Ada masalah saat mengambil data.');
    }
    
    // Konversi responsenya ke JSON
    return response.json();
    })
    .then(function(data) {
    // Data JSON tersedia di sini
    console.log(data);
    //Menampilkan di halaman web
    data.forEach(data => {
        const divVideo = document.querySelector(".artikel-content-vid");
    
        divVideo.innerHTML = divVideo.innerHTML + `
        <a href="${data.link_vidio}">
            <div class="card">
                <div class="head-card">
                    <img src="${data.image}" alt="${data.judul}">
                </div>
                <div class="body-card">
                    <h1>${data.judul}</h1>
                    <p>${data.deskripsi}</p>
                </div>
            </div>
        </a>
        `
    });
    })
    .catch(function(error) {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
    });