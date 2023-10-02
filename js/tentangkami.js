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

const listTeam = [
    {
        image : "../Asset/Dokter/dr. Ernest Sopata.jpg",
        role : "Project Leader",
        name : "Denilson",
        prodi : "???",
        univ : "???",
    },

    {
        image : "../Asset/Dokter/dr. Ernest Sopata.jpg",
        role : "Frontend Developer",
        name : "Fajar",
        prodi : "???",
        univ : "???",
    },

    {
        image : "../Asset/Dokter/dr. Ernest Sopata.jpg",
        role : "Backend Developer",
        name : "Hana",
        prodi : "???",
        univ : "???",
    },

    {
        image : "../Asset/Dokter/dr. Ernest Sopata.jpg",
        role : "Backend Developer",
        name : "Zakia",
        prodi : "???",
        univ : "???",
    },

    {
        image : "../Asset/Dokter/dr. Ernest Sopata.jpg",
        role : "Quality Assurance",
        name : "Auliyah",
        prodi : "???",
        univ : "???",
    },
];

listTeam.forEach(member => {
    const divTeam = document.querySelector(".wrap-card");

    divTeam.innerHTML = divTeam.innerHTML + `
    <div class="card">
        <div class="head-card">
            <img src="${member.image}" alt="">
        </div>
        <div class="body-card">
            <h1>${member.role}</h1>
            <p>${member.name}</p>
            <p>${member.prodi}</p>
            <p>${member.univ}</p>
        </div>
    </div>`
});