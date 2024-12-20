// Navbar-Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNavPosition = header.offsetTop;
    const toTop = document.querySelector('#top');

    if (window.pageYOffset > fixedNavPosition) {
        header.classList.add('navbar-fixed'); // Tambahkan class untuk posisi fixed
        toTop.classList.remove('hidden');    // Tampilkan tombol ke atas
        toTop.classList.add('flex');         // Pastikan tombol ke atas terlihat
    } else {
        header.classList.remove('navbar-fixed'); // Kembalikan posisi semula
        toTop.classList.add('hidden');          // Sembunyikan tombol ke atas
        toTop.classList.remove('flex');         // Hapus class flex jika tidak perlu
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');  
}); 

// Klik dimana aja
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.documentElement; // Lebih spesifik untuk elemen <html>

// Tambahkan event listener pada toggle
darkToggle.addEventListener('change', () => {
    // Periksa status checkbox
    if (darkToggle.checked) {
        html.classList.add('dark'); // Aktifkan mode gelap
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark'); // Nonaktifkan mode gelap
        localStorage.theme = ('light');
    }
});


// pindah posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
}  else {
    darkToggle.checked = false;
}