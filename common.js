// LOAD DOCUMENT EVENT
const userInfo = document.getElementById('user-info');
const username_display = document.getElementById('user-name-text');
const userStatus = document.getElementById('user-status');
const loginContainer = document.getElementById('login-container');
const anchorPeminjaman = document.getElementById('link-peminjaman');
const containerAnchorPeminjaman = document.getElementById('container-link-peminjaman');
const anchorForm = document.getElementById('link-forms');
const containerAnchorForm = document.getElementById('container-link-form');
const containerDropForm = document.getElementById('drop-forms');
const anchorFormRusak = document.getElementById('item-form-kerusakan');
const anchorFormKeluar = document.getElementById('item-form-keluar');
const anchorFormStay = document.getElementById('item-form-sir');

document.addEventListener('DOMContentLoaded', ()=>{
    const username = sessionStorage.getItem('username');
    if(username){
        username_display.innerHTML = username;
        userInfo.style.display = 'flex';
        loginContainer.style.display = 'none';
        if(username.length == 4){
            userStatus.innerHTML = "STAFF";
        } else userStatus.innerHTML = "MAHASISWA";
        anchorPeminjaman.href = "peminjaman.html";
        anchorForm.href = "formKerusakan.html";
        anchorFormKeluar.href = "formKerusakan.html";
        anchorFormRusak.href = "formKeluarMasuk.html";
        anchorFormStay.href = "formsSIR.html";

        containerAnchorPeminjaman.addEventListener('click', ()=>{});
        anchorForm.href = "formKerusakan.html";
        containerAnchorForm.addEventListener('click', ()=>{});
    } else {
        console.log(anchorPeminjaman.href);
        anchorPeminjaman.href = "login.html";
        anchorForm.href = "login.html";
        anchorFormKeluar.href = "login.html";
        anchorFormRusak.href = "login.html";
        anchorFormStay.href = "login.html";
        containerAnchorPeminjaman.addEventListener('click', ()=>{
            confirmRedirection();
        });
        anchorForm.href = "login.html";
        containerAnchorForm.addEventListener('click', ()=>{
            confirmRedirection();
        });
        containerDropForm.addEventListener('click', ()=>{
            confirmRedirection();
        })
    }
})

// PREVENT GUEST TO ACCESS NON-ACCESSIBLE LINKS
function confirmRedirection(){
    if(confirm('Cannot access this page as guest. Do you want to login?')){
        // console.log("RAWRR")
        window.location.href = 'login.html'
    }
}

// DROPDOWN EVENT
const dropdown_fasil = document.getElementById('drop-fasilitas')
const dropdown_form = document.getElementById('drop-forms')
const btnDropFasil = document.getElementById('btn-drop-fasilitas')
const btnDropForm = document.getElementById('btn-drop-forms')

let shownFacil = false;
btnDropFasil.addEventListener('click', (event)=>{
    event.stopPropagation();
    if(!shownFacil){
        dropdown_fasil.style.height = 'auto';
        dropdown_fasil.style.visibility = 'visible';
        btnDropFasil.style.transform = 'rotate(180deg)';
        shownFacil = true;
    } else {
        btnDropFasil.style.transform = 'rotate(0deg)';
        dropdown_fasil.style.height = '0';
        dropdown_fasil.style.visibility = 'collapse';
        shownFacil = false;
    }
})

dropdown_fasil.addEventListener('mouseenter', function(event){
    event.stopPropagation();
    if(shownFacil == false){
        dropdown_fasil.style.height = 'auto';
        dropdown_fasil.style.visibility = 'visible';
        btnDropFasil.style.transform = 'rotate(180deg)';
        shownFacil = true;
    }
})

dropdown_fasil.addEventListener('mouseleave', function(event){
    event.stopPropagation();
    if(shownFacil == true){
        dropdown_fasil.style.height = '0';
        dropdown_fasil.style.visibility = 'collapse';
        btnDropFasil.style.transform = 'rotate(0deg)';
        shownFacil = false;
    }
})

let shownForm = false;
btnDropForm.addEventListener('click', (event)=>{
    event.stopPropagation();
    if(!shownForm){
        dropdown_form.style.height = 'auto';
        dropdown_form.style.visibility = 'visible';
        btnDropForm.style.transform = 'rotate(180deg)';
        shownForm = true;
    } else {
        btnDropForm.style.transform = 'rotate(0deg)';
        dropdown_form.style.height = '0';
        dropdown_form.style.visibility = 'collapse';
        shownForm = false;
    }
})

dropdown_form.addEventListener('mouseenter', function(event){
    event.stopPropagation();
    if(shownForm == false){
        dropdown_form.style.height = 'auto';
        dropdown_form.style.visibility = 'visible';
        btnDropForm.style.transform = 'rotate(180deg)';
        shownForm = true;
    }
})

dropdown_form.addEventListener('mouseleave', function(event){
    event.stopPropagation();
    if(shownForm == true){
        dropdown_form.style.height = '0';
        dropdown_form.style.visibility = 'collapse';
        btnDropForm.style.transform = 'rotate(0deg)';
        shownForm = false;
    }
})

// CLICK DIV GOES TO BERANDA
const myRTBlogo = document.getElementById('myRTB-logo');
myRTBlogo.addEventListener('click', ()=>{
    window.location.href = "./index.html";
})

function locateToProfilePage(){
    window.location.href = "./profileUser.html";
}

const userPic = document.getElementById('user-pic');
userPic.addEventListener('click', locateToProfilePage);
username_display.addEventListener('click', locateToProfilePage);
