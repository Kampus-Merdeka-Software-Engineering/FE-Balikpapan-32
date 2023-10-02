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

// Memasukkan artikel dan video
const listArtikel = [
    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 1",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 2",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 3",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 4",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 5",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 6",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },
];

const listVideo = [
    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 1 Vid",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 2 Video",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 3",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 4",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 5",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },

    {
        link:"http://instagram.com",
        image:"../Asset/Beranda/Beranda Awal/Element Beranda 1.png",
        name: "Judul 6",
        description: "Lorem ipsum dolor sit amet lorem ipsum adimaidmanofeafooo",
    },
];
// Membuat elemen di html
listArtikel.forEach(Artikel => {
    const divArtikel = document.querySelector(".artikel-content");

    divArtikel.innerHTML = divArtikel.innerHTML + `
    <a href="${Artikel.link}">
        <div class="card">
            <div class="head-card">
                <img src="${Artikel.image}" alt="${Artikel.name}">
            </div>
            <div class="body-card">
                <h1>${Artikel.name}</h1>
                <p>${Artikel.description}</p>
            </div>
        </div>
    </a>
    `
});

listVideo.forEach(Video => {
    const divVideo = document.querySelector(".artikel-content-vid");

    divVideo.innerHTML = divVideo.innerHTML + `
    <a href="${Video.link}">
        <div class="card">
            <div class="head-card">
                <img src="${Video.image}" alt="${Video.name}">
            </div>
            <div class="body-card">
                <h1>${Video.name}</h1>
                <p>${Video.description}</p>
            </div>
        </div>
    </a>
    `
});

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