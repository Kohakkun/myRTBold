// LOAD DOCUMENT EVENT
const userInfo = document.getElementById('user-info');
const username_display = document.getElementById('user-name-text');
const userStatus = document.getElementById('btn-status');
const loginContainer = document.getElementById('login-container');
const anchorPeminjaman = document.getElementById('link-peminjaman');
const containerAnchorPeminjaman = document.getElementById('container-link-peminjaman');
const anchorForm = document.getElementById('link-forms');
const containerAnchorForm = document.getElementById('container-link-form');
const containerAnchorFasil = document.getElementById('container-link-fasilitas-li');
const containerAnchorFormLi = document.getElementById('container-link-form-li');
const containerAnchorPeminjamanLi = document.getElementById('container-link-peminjaman-li');
const containerDropForm = document.getElementById('drop-forms');
const anchorFormRusak = document.getElementById('item-form-kerusakan');
const anchorFormKeluar = document.getElementById('item-form-keluar');
const anchorFormStay = document.getElementById('item-form-sir');
const anchorCws = document.getElementById('item-cws');
const anchorCuci = document.getElementById('item-cuci');
const anchorKomunal = document.getElementById('item-komunal');
const anchorSergun = document.getElementById('item-sergun');
const anchorDapur = document.getElementById('item-dapur');
sessionStorage.setItem('fasilitas', '');

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

document.addEventListener('DOMContentLoaded', ()=>{
    const username = sessionStorage.getItem('username');
    console.log('Username: ' + username);
    if(username && username !== ''){
        username_display.innerHTML = username;
        userInfo.style.display = 'flex';
        loginContainer.style.display = 'none';
        if(username.length == 4){
            userStatus.innerHTML = "STAFF";
        } else{
            userStatus.innerHTML = "MAHASISWA";
        } 
        anchorForm.href = "formKerusakan.html";
        anchorFormKeluar.href = "formKerusakan.html";
        anchorFormRusak.href = "formKeluarMasuk.html";
        anchorFormStay.href = "formsSIR.html";
        anchorPeminjaman.href = "peminjaman.html";
        // anchorCws.href = "peminjaman.html";
        // anchorCuci.href = "peminjaman.html";
        // anchorSergun.href = "peminjaman.html";
        // anchorKomunal.href = "peminjaman.html";
        // anchorDapur.href = "peminjaman.html";

        containerAnchorPeminjaman.addEventListener('click', ()=>{});
        anchorForm.href = "formKerusakan.html";
        containerAnchorForm.addEventListener('click', ()=>{});
        // SEND DATA PEMINJAMAN
        anchorCws.addEventListener('click', ()=>{
            sessionStorage.setItem('natan', "CWS");
            // console.log(sessionStorage)
            window.location.href = 'peminjaman.html';
        })
        anchorCuci.addEventListener('click', ()=>{
            sessionStorage.setItem('natan', "cuci");
            window.location.href = 'peminjaman.html';
        })
        anchorSergun.addEventListener('click', ()=>{
            sessionStorage.setItem('natan', "sergun");
            window.location.href = 'peminjaman.html';
        })
        anchorDapur.addEventListener('click', ()=>{
            sessionStorage.setItem('natan', "dapur");
            window.location.href = 'peminjaman.html';
        })
        anchorKomunal.addEventListener('click', ()=>{
            sessionStorage.setItem('natan', "komunal");
            window.location.href = 'peminjaman.html';
        })

    } else {
        console.log(anchorPeminjaman.href);
        anchorPeminjaman.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorCws.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorCuci.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorSergun.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorKomunal.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorDapur.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        anchorForm.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        containerAnchorPeminjaman.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        containerAnchorForm.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        });
        containerDropForm.addEventListener('click', (event)=>{
            event.stopPropagation();
            confirmRedirection();
        })
    }
})

// PREVENT GUEST TO ACCESS NON-ACCESSIBLE LINKS
function confirmRedirection(){
    if(confirm('Cannot access this page as guest. Do you want to login?')){
        window.location.href = './login.html'
    }
}

// DROPDOWN EVENT
const dropdown_fasil = document.getElementById('drop-fasilitas')
const dropdown_form = document.getElementById('drop-forms')
const dropdown_peminjaman = document.getElementById('drop-peminjaman')
const btnDropFasil = document.getElementById('btn-drop-fasilitas')
const btnDropForm = document.getElementById('btn-drop-forms')
const btnDropPeminjaman = document.getElementById('btn-drop-peminjaman')

let shownFacil = false;
containerAnchorFasil.addEventListener('mouseleave', (event)=>{
    btnDropFasil.style.transform = 'rotate(0deg)';
    dropdown_fasil.style.height = '0';
    dropdown_fasil.style.visibility = 'collapse';
    shownFacil = false;
})

btnDropFasil.addEventListener('mouseenter', (event)=>{
    event.stopPropagation();
    closeAllDropdown();
    dropdown_fasil.style.height = 'auto';
    dropdown_fasil.style.visibility = 'visible';
    btnDropFasil.style.transform = 'rotate(180deg)';
    shownFacil = true;
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

let shownForm = false;
containerAnchorFormLi.addEventListener('mouseleave', (event)=>{
    btnDropForm.style.transform = 'rotate(0deg)';
    dropdown_form.style.height = '0';
    dropdown_form.style.visibility = 'collapse';
    shownForm = false;
})
btnDropForm.addEventListener('mouseenter', (event)=>{
    event.stopPropagation();
    closeAllDropdown();
    dropdown_form.style.height = 'auto';
    dropdown_form.style.visibility = 'visible';
    btnDropForm.style.transform = 'rotate(180deg)';
    shownForm = true;
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

let shownPeminjaman = false;
containerAnchorPeminjamanLi.addEventListener('mouseleave', function(event){
    event.stopPropagation();
    if(shownPeminjaman == true){
        dropdown_peminjaman.style.height = '0';
        dropdown_peminjaman.style.visibility = 'collapse';
        btnDropPeminjaman.style.transform = 'rotate(0deg)';
        shownPeminjaman = false;
    }
})

btnDropPeminjaman.addEventListener('mouseenter', (event)=>{
    event.stopPropagation();
    closeAllDropdown();
    dropdown_peminjaman.style.height = 'auto';
    dropdown_peminjaman.style.visibility = 'visible';
    btnDropPeminjaman.style.transform = 'rotate(180deg)';
    shownPeminjaman = true;
})

dropdown_peminjaman.addEventListener('mouseenter', function(event){
    event.stopPropagation();
    if(shownPeminjaman == false){
        dropdown_peminjaman.style.height = 'auto';
        dropdown_peminjaman.style.visibility = 'visible';
        btnDropPeminjaman.style.transform = 'rotate(180deg)';
        shownPeminjaman = true;
    }
})

function closeAllDropdown(){
    dropdown_form.style.height = '0';
    dropdown_form.style.visibility = 'collapse';
    btnDropForm.style.transform = 'rotate(0deg)';
    shownForm = false;

    dropdown_fasil.style.height = '0';
    dropdown_fasil.style.visibility = 'collapse';
    btnDropFasil.style.transform = 'rotate(0deg)';
    shownFacil = false;

    dropdown_peminjaman.style.height = '0';
    dropdown_peminjaman.style.visibility = 'collapse';
    btnDropPeminjaman.style.transform = 'rotate(0deg)';
    shownPeminjaman = false;
}
