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
        link:"https://www.alodokter.com/ptsd",
        image:"https://res.cloudinary.com/dk0z4ums3/image/upload/v1621416459/attached_image/ptsd-0-alodokter.jpg",
        name: "PTSD: Trauma Tidak Harus Jadi Akhir Hidup Anda",
        description: "PTSD merupakan gangguan kecemasan yang membuat penderitanya teringat pada kejadian traumatis. Beberapa peristiwa traumatis yang dapat memicu PTSD adalah perang, kecelakaan, bencana alam, dan pelecehan seksual.",
    },

    {
        link:"https://ciputrahospital.com/depresi-dan-kecemasan-gangguan-kesehatan-mental-yang-perlu-kita-waspadai/",
        image:"https://ciputrahospital.com/wp-content/uploads/2021/01/shutterstock_1347450608resizee.jpg",
        name: "Depresi dan Kecemasan: Dua Hal Yang Sering Salah Dipahami",
        description: "Apa itu depresi? Depresi dan kecemasan adalah dua gangguan kesehatan mental yang dapat mengganggu fungsi keseharian individu. Ketika depresi, Anda mungkin merasa tidak semangat dalam menjalani hari, begitupun saat kecemasan Anda datang, hari-hari Anda berjalan dengan penuh kekhawatiran. Oleh karena itu, Anda perlu mengetahui apa itu depresi dan bagaimana cara mengatasinya.",
    },

    {
        link:"https://www.halodoc.com/artikel/inilah-jenis-jenis-skizofrenia-yang-perlu-diketahui",
        image:"https://d1bpj0tv6vfxyp.cloudfront.net/articles/90d68ea5-2a27-4192-b112-7cab53de58d3_article_image_url.webp",
        name: "Skizofrenia: Gangguan Mental yang Lebih dari yang Terlihat",
        description: "Ditandai dengan gangguan pikiran, perilaku abnormal, dan antisosial, skizofrenia merupakan gangguan kejiwaan yang membuat pengidapnya sulit membedakan antara kenyataan dan khayalan. Awalnya, gangguan kejiwaan ini terbagi menjadi 5 jenis. Namun, pada 2013 lalu, dalam Diagnostic and Statistical Manual of Mental Disorders 5th Edition (DSM-V), para ahli dari American Psychiatric Association (APA) menganjurkan untuk menghapus 5 jenis itu, dan hanya menggunakan satu sebutan, yaitu skizofrenia.",
    },

    {
        link:"https://www.halodoc.com/kesehatan/gangguan-makan",
        image:"https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/31035701/gangguan-makan-halodoc.jpg.webp",
        name: "Gangguan Makan: Bukan Sekadar Masalah Berat Badan",
        description: "Gangguan makan adalah sikap yang berbeda terhadap makanan yang menyebabkan seseorang mengubah perilaku dan kebiasaan makannya. Hal ini dapat menjadi kondisi serius yang berdampak negatif bagi kesehatan, emosi, dan kemampuan seseorang dalam berbagai area kehidupan yang penting. Meskipun namanya gangguan makan atau eating disorder, tapi gangguan ini sebenarnya lebih dari sekadar makanan. Gangguan makan adalah kondisi kesehatan mental yang kompleks dan sering kali membutuhkan intervensi dari ahli medis dan psikologis untuk mengubah arah mereka. Gangguan ini tercatat dalam Manual Diagnostik dan Statistik Gangguan Mental American Psychiatric Association, edisi kelima (DSM-5).",
    },
];

const listVideo = [
    {
        link:"https://youtu.be/Qk979l3V9UU?si=rAlQYVvdELCGYZPG",
        image:"https://i.ytimg.com/vi/Qk979l3V9UU/maxresdefault.jpg",
        name: "PTSD: Jangan Diabaikan, Segera Cari Bantuan",
        description: "Pernahkah kamu mendengar istilah adalah suatu gangguan pada kesehatan mental yang terjadi ketika seseorang pernah mengalami trauma yang begitu berat. Biasanya, trauma yang terjadi disebabkan oleh suatu kejadian yang menakutkan, meng*ncam nyawa, atau bahkan suatu kejadian yang tidak ingin mereka ingat lagi. Oleh karena itu, kita harus lebih peka terhadap kondisi kita pribadi atau orang-orang di sekitar kita. Ada beberapa fakta tentang PTSD yang harus kita ketahui yang akan di jelaskan oleh Dr. Dharmawan SpKJ.",
    },

    {
        link:"https://www.youtube.com/watch?v=CexDxOtHvnY",
        image:"https://i.ytimg.com/vi/CexDxOtHvnY/maxresdefault.jpg",
        name: "Depresi dan Kecemasan Mengganggu Kehidupan? ",
        description: "Gangguan kecemasan dapat terjadi pada siapa pun. Gangguan kecemasan ditandai dengan rasa cemas atau khawatir yang berlebihan, dan tidak terkendali terhadap berbagai hal dan kondisi. Dokter Spesialis Kejiwaan, dr. Lahargo Kembaren, Sp.KJ mengungkap tuntas mengenai berbagai jenis gangguan kecemasan. Simak dalam tayangan Solusi Kesehatan Jiwa berikut ini. ",
    },

    {
        link:"https://www.youtube.com/watch?v=OXFIvCCWJnE",
        image:"https://i.ytimg.com/vi/OXFIvCCWJnE/maxresdefault.jpg",
        name: "Skizofrenia: Menelusuri Penyebab, Gejala, dan Pengobatan",
        description: "Skizofrenia atau schizophrenia adalah gangguan jiwa berat, yang memengaruhi pikiran, perasaan, dan perilaku penderitanya. Orang dengan skizofrenia umumnya mengalami psikosis, yaitu suatu kondisi di mana penderitanya tidak dapat membedakan antara khayalan dan kenyataan.",
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