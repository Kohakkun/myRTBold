// LOAD DOCUMENT EVENT
const userInfo = document.getElementById('user-info');
const userStatus = document.getElementById('user-status');
const loginContainer = document.getElementById('login-container');
const anchorPeminjaman = document.getElementById('link-peminjaman');
document.addEventListener('DOMContentLoaded', ()=>{
    const username = sessionStorage.getItem('username');
    if(username){
        userInfo.style.display = 'flex';
        loginContainer.style.display = 'none';
        if(username.length == 4){
            userStatus.innerHTML = "MAHASISWA";
        } else userStatus.innerHTML = "STAFF";
    } else {
        // console.log(anchorPeminjaman.href);
        // anchorPeminjaman.href = "";
        // console.log(anchorPeminjaman.href);
        // anchorPeminjaman.addEventListener('click', confirmRedirection());
        // console.log(anchorPeminjaman.onclick);
    }
})

// PREVENT GUEST TO ACCESS NON-ACCESSIBLE LINKS
function confirmRedirection(){
    if(confirm('Cannot access this page as guest. Do you want to login?')){
        window.location.href = 'login.html'
    }
}

// DROPDOWN EVENT
const dropdown_fasil = document.getElementById('drop-fasilitas')
const dropdown_forms = document.getElementById('drop-forms')
const btnDropFasil = document.getElementById('btn-drop-fasilitas')
const btnDropForm = document.getElementById('btn-drop-forms')

let shownFacil = false;
btnDropFasil.addEventListener('click', function(event){
    event.stopPropagation();
    if(shownFacil == false){
        dropdown_fasil.style.visibility = 'visible';
        btnDropFasil.style.transform = 'rotate(180deg)';
        shownFacil = true;
    } else{
        btnDropFasil.style.transform = 'rotate(0deg)';
        dropdown_fasil.style.visibility = 'collapse';
        shownFacil = false;
    }
})

dropdown_fasil.addEventListener('mouseenter', function(event){
    event.stopPropagation();
    if(shownFacil == false){
        dropdown_fasil.style.visibility = 'visible';
        btnDropFasil.style.transform = 'rotate(180deg)';
        shownFacil = true;
    }
})

dropdown_fasil.addEventListener('mouseleave', function(event){
    event.stopPropagation();
    if(shownFacil == true){
        btnDropFasil.style.transform = 'rotate(0deg)';
        dropdown_fasil.style.visibility = 'collapse';
        shownFacil = false;
    }
})

let shownForm = false;
btnDropForm.addEventListener('click', function(event){
    event.stopPropagation();
    if(shownForm == false){
        dropdown_forms.style.visibility = 'visible';
        btnDropForm.style.transform = 'rotate(180deg)';
        shownForm = true;
    } else{
        btnDropForm.style.transform = 'rotate(0deg)';
        dropdown_forms.style.visibility = 'collapse';
        shownForm = false;
    }
})

dropdown_forms.addEventListener('mouseenter', function(event){
    event.stopPropagation();
    if(shownForm == false){
        dropdown_forms.style.visibility = 'visible';
        btnDropForm.style.transform = 'rotate(180deg)';
        shownForm = true;
    }
})

dropdown_forms.addEventListener('mouseleave', function(event){
    event.stopPropagation();
    if(shownForm == true){
        btnDropForm.style.transform = 'rotate(0deg)';
        dropdown_forms.style.visibility = 'collapse';
        shownForm = false;
    }
})