let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');

let active = 0;
let lengthItems = items.length - 1;

function nextSlide(){
    if(active + 1 > lengthItems){
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {nextSlide()}, 3000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

// DROPDOWN FASILITAS TREE
const dropLt5 = document.getElementById('dropLantai5');
const dropLt3 = document.getElementById('dropLantai3');
const dropLt2 = document.getElementById('dropLantai2');
const dropLt1 = document.getElementById('dropLantai1');
const dropLtLG = document.getElementById('dropLantaiLG');
let dropLantai = [false, false, false, false, false];

const containerTree = document.querySelector('.treeFasilitas')
const containerUlTree = document.querySelector('.timeline ul')

let treeHeightStyles = window.getComputedStyle(containerTree)
let treeHeight;
let UlTreeHeightStyles = window.getComputedStyle(containerUlTree)
let UlTreeHeightStr = UlTreeHeightStyles.height;
let UlTreeHeight = parseInt(UlTreeHeightStr.substring(0, UlTreeHeightStr.indexOf('p')));
console.log(UlTreeHeight)
let adjustTrHeight = adjustTreeHeight();

function adjustTreeHeight(){
    treeHeight = 106 + getUlTreeHeight() + 50;
    console.log("new tree height: " + treeHeight);
    containerTree.style.height = treeHeight + 'px';
}

function getUlTreeHeight(){
    UlTreeHeightStyles = window.getComputedStyle(containerUlTree);
    UlTreeHeightStr = UlTreeHeightStyles.height;
    UlTreeHeight = parseInt(UlTreeHeightStr.substring(0, UlTreeHeightStr.indexOf('p')));
    return UlTreeHeight;
}

function closeAll(){
    for(let i = 0; i < 5; i++){
        if(dropLantai[i]){
            // function close dropdown
            if(i == 0) closeLt5();
            else if(i == 1) closeLt3();
            else if(i == 2) closeLt2();
            else if(i == 3) closeLt1();
            else closeLtLG();
        }
    }
}

const contentLt5 = document.querySelectorAll('.contentLt5');
const contentLt3 = document.querySelector('.contentLt3');
const contentLt2 = document.querySelector('.contentLt2');
const contentLt1 = document.querySelector('.contentLt1');
const contentLtLG = document.querySelectorAll('.contentLtLG');

const elementLt3 = document.querySelector('.timeline ul li:nth-child(2)')
const elementLt2 = document.querySelector('.timeline ul li:nth-child(3)')
const elementLt1 = document.querySelector('.timeline ul li:nth-child(4)')
const elementLtLG = document.querySelector('.timeline ul li:nth-child(5)')

const marginElementLt3 = getComputedStyle(elementLt3)

dropLt5.addEventListener('click', ()=>{
    if(!dropLantai[0]){
        closeAll();
        dropLantai5();
    } else {
        closeLt5();
    }
})

function dropLantai5(){
    contentLt5[0].style.display = 'block';
    contentLt5[1].style.display = 'block';
    contentLt5[2].style.display = 'block';
    adjustTreeHeight();
    dropLantai[0] = true;
}

function closeLt5(){
    contentLt5[0].style.display = 'none';
    contentLt5[1].style.display = 'none';
    contentLt5[2].style.display = 'none';
    adjustTreeHeight();
    dropLantai[0] = false;
}

dropLt3.addEventListener('click', ()=>{
    if(!dropLantai[1]){
        closeAll();
        dropLantai3();
    } else {
        closeLt3();
    }
})

function dropLantai3(){
    contentLt3.style.display = 'block';
    adjustTreeHeight();
    dropLantai[1] = true;
}

function closeLt3(){
    contentLt3.style.display = 'none';
    adjustTreeHeight();
    dropLantai[1] = false;
}

dropLt2.addEventListener('click', ()=>{
    if(!dropLantai[2]){
        closeAll();
        dropLantai2();
    } else {
        closeLt2();
    }
})

function dropLantai2(){
    contentLt2.style.display = 'block';
    adjustTreeHeight();
    dropLantai[2] = true;
}

function closeLt2(){
    contentLt2.style.display = 'none';
    adjustTreeHeight();
    dropLantai[2] = false;
}

dropLt1.addEventListener('click', ()=>{
    if(!dropLantai[3]){
        closeAll();
        dropLantai1();
    } else {
        closeLt1();
    }
})

function dropLantai1(){
    contentLt1.style.display = 'block';
    adjustTreeHeight();
    dropLantai[3] = true;
}

function closeLt1(){
    contentLt1.style.display = 'none';
    adjustTreeHeight();
    dropLantai[3] = false;
}

dropLtLG.addEventListener('click', ()=>{
    if(!dropLantai[4]){
        closeAll();
        dropLantaiLG();
    } else {
        closeLtLG();
    }
})

function dropLantaiLG(){
    contentLtLG[0].style.display = 'block';
    contentLtLG[1].style.display = 'block';
    contentLtLG[2].style.display = 'block';
    adjustTreeHeight();
    dropLantai[4] = true;
}

function closeLtLG(){
    contentLtLG[0].style.display = 'none';
    contentLtLG[1].style.display = 'none';
    contentLtLG[2].style.display = 'none';
    adjustTreeHeight();
    dropLantai[4] = false;
}