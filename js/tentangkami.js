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
const socialMedia = document.getElementById("social");
const myFunction = (e) => {
    if(!confirm('Apakah anda yakin ingin meninggalkan halaman ini?')) e.preventDefault();
}

socialMedia.addEventListener('click', myFunction, false);

// -------------------------------------------------------------------------------------------------------------//
const API_BASE_URL = 'https://be-balikpapan-32-production.up.railway.app';
fetch(`${API_BASE_URL}/ourteam/`)
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
        const divTeam = document.querySelector(".wrap-card");
    
        divTeam.innerHTML = divTeam.innerHTML + `
        <div class="card">
            <div class="head-card">
                <img src="${data.image}" alt="">
            </div>
            <div class="body-card">
                <h1>${data.role}</h1>
                <p>${data.nama}</p>
                <p>${data.prodi}</p>
                <p>${data.Univ}</p>
            </div>
        </div>`
    });
    })
    .catch(function(error) {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
    });
