// Hamburger Menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
    // Membuka dropdown menu
toggleBtn.onclick = function (){
dropDownMenu.classList.toggle('open');
const isOpen = dropDownMenu.classList.contains('open');
    // Mengganti icon hamburger
toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};

// Loading screen
const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// confirm pindah web
const socialMedia = document.getElementById("social");
const myFunction = (e) => {
    if(!confirm('Apakah anda yakin ingin meninggalkan halaman ini?')) e.preventDefault();
};

socialMedia.addEventListener('click', myFunction, false);

// Modal formulir
const modal = document.getElementById("myModal");
const formBtn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
// Memunculkan formulir
formBtn.onclick = function() {
    modal.style.display = "block";
};
// Menutup formulir ketika meng-klik span close
span.onclick = function() {
    modal.style.display = "none";
    formDaftar.reset();
};
// Menutup formulir ketika meng-klik di luar form
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    formDaftar.reset();
};
};

// Membuat mapping pada form
document.addEventListener('DOMContentLoaded',function(){
    const selectKonseling = document.getElementById('konseling');
    const selectDokter = document.getElementById('dokter');
    // Mapping jenis konseling -> Pilihan dokter
    const doctorMap = {
        "konselingoffline" : ["Dr. Ernest Sopata", "Dr. Luke Ishman", "Dr. Michael Morva", "Dr. Mia Goudy"],
        "konselingonline" : ["Dr. Ernest Sopata", "Dr. Kaden Dez", "Dr. Luke Ishman", "Dr. Lydia Weyker", "Dr. Michael Morva", "Dr. Mia Goudy"],
        "seminar" : ['Tidak perlu memilih dokter']
    };
    selectKonseling.addEventListener('change',function(){
        const selectedKonseling = selectKonseling.value;
        const pilihanDokter = doctorMap[selectedKonseling]|| [];
    // Merubah option dokter menjadi sesuai mapping
        selectDokter.innerHTML='';
        pilihanDokter.forEach(dokter =>{
            const option = document.createElement('option');
            option.textContent=dokter;
            selectDokter.appendChild(option);
        });
    });
});

const formNamaLengkap = document.getElementsByName("nama-form");
const formEmail = document.getElementsByName("email");
const formKonseling = document.getElementsByName("konseling");
const formDokter = document.getElementsByName("dokter");
// Menampilkan form daftar dan meng-close form daftar
const formDaftar = document.getElementById("myModal");
formDaftar.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formNamaLengkap.value=="" || formEmail.value=="" || formKonseling.value=="" || formDokter.value==""){
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This form has been successfully submitted!");
        formDaftar.style.display ="none";

    formDaftar.reset();
    };
});

const listTestimoni = [
    {
        name:"Demo",
        testimoni:"Terima kasih Caring is Loving",
    },

    {
        name:"Nanang",
        testimoni:"Caring is Loving sangat membantu saya dalam menyembuhkan kesehatan mental saya",
    },

    {
        name:"Anonymous aja gapapa kan ya heheh",
        testimoni:"Dokter di caring is loving baik bangettt",
    },

    {
        name:"Caring is Loving lovers",
        testimoni:"Saya cinta caring is loving",
    },

    {
        name:"Amnyamnyam emm kenyangg",
        testimoni:"Sangat membantu",
    },
];

listTestimoni.forEach(Testi => {
    const divTestimoni = document.querySelector(".wrap-testi");

    divTestimoni.innerHTML = divTestimoni.innerHTML + `
    <div class="card">
        <div class="card-content">
            <h2>${Testi.name}</h2>
            <p>${Testi.testimoni}</p>
        </div>
    </div>`
});