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

// Membuat mapping pada form
document.addEventListener('DOMContentLoaded',function(){
    const selectKonseling = document.getElementById('konseling');
    const selectDokter = document.getElementById('dokter');
    // Mapping jenis konseling -> Pilihan dokter
    const doctorMap = {
        "Konseling Offline" : ["Dr. Ernest Sopata", "Dr. Luke Ishman", "Dr. Michael Morva", "Dr. Mia Goudy"],
        "Konseling Online" : ["Dr. Ernest Sopata", "Dr. Kaden Dez", "Dr. Luke Ishman", "Dr. Lydia Weyker", "Dr. Michael Morva", "Dr. Mia Goudy"],
        "Seminar Rutin" : ['-']
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

const feedbackNama = document.getElementsByName("nama-feedback");
const feedbackTesti = document.getElementsByName("feedback");
const formFeedback = document.getElementById("feedbackForm");
formFeedback.addEventListener("submit", (e) => {
    e.preventDefault();

    if (feedbackNama.value=="" || feedbackTesti.value==""){
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This form has been successfully submitted!");

    formFeedback.reset();
    };
});

// --------------------------------------------------------------------------------------------------------------------------//
const API_BASE_URL = 'https://be-balikpapan-32-production.up.railway.app';
// POST DATA TO DATABASE
const submitForm = document.getElementById("submitForm");
submitForm.onclick = function(){
    const inputElementNama = document.querySelector('input[name="nama-form"]');
    const namaValue = inputElementNama.value;
    const inputElementEmail = document.querySelector('input[name="email"]');
    const emailValue = inputElementEmail.value;
    const inputElementKonseling = document.querySelector('select[name="konseling"]');
    const konselingValue = inputElementKonseling.value;
    const inputElementDokter = document.querySelector('select[name="dokter"]');
    const dokterValue = inputElementDokter.value;

    let postData = {
        nama: namaValue,
        email: emailValue,
        jenis_konseling: konselingValue,
        pilihan_dokter: dokterValue,
    }
        fetch(`${API_BASE_URL}/pendaftaran/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData) 
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Ada error');
        }
        return response.json(); 
        })
        .then(resp => {
        console.log(`Terimakasih ${resp.data.nama} dengan email ${resp.data.email}, sudah mendaftar pada ${resp.data.jenis_konseling}, dengan dokter ${resp.data.pilihan_dokter}`);

        })
        .catch(error => {
        console.error('POST request error:', error);
        });      
};

const submitFeedback =document.getElementById('submit-feedback');
submitFeedback.onclick = function(){
    const inputNamaFeedback = document.querySelector('input[name="nama-feedback"]');
    const namaFeedback= inputNamaFeedback.value;
    const inputTestiFeedback = document.getElementById('myFeedback');
    const testiFeedback= inputTestiFeedback.value;

    let postFeedback = {
        nama: namaFeedback,
        pesan: testiFeedback,
    }
        fetch(`${API_BASE_URL}/feedback/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postFeedback) 
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Ada error');
        }
        return response.json();
        })
        .then(resp => {
        console.log(`Nama: ${resp.data.nama} Pesan:${resp.data.pesan}`);

        })
        .catch(error => {
        console.error('POST request error:', error);
        });      
}


fetch(`${API_BASE_URL}/feedback/`)
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
        const divTestimoni = document.querySelector(".wrap-testi");
    
        divTestimoni.innerHTML = divTestimoni.innerHTML + `
        <div class="card">
            <div class="card-content">
                <h2>${data.nama}</h2>
                <p>${data.pesan}</p>
            </div>
        </div>`
    });
    })
    .catch(function(error) {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
    });

