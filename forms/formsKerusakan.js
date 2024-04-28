const title = document.title;
const btnForm = document.querySelector('.btnForm');
const dropdown = document.querySelector(".dropdown");
const myDropdown = document.getElementById("myDropdown");
const triangle = document.querySelector(".triangle");
const dropbtn = document.querySelector(".dropbtn");
const triangleClass = document.querySelector(".triangleClass");
const tbClass = document.querySelector(".tbClass");
const dropdownClass = document.querySelector(".classDropdown-content");
const classTB = document.querySelector('.ClassBtnForm'); // Changed from .classBtnForm to .ClassBtnForm
const classBtns = document.querySelectorAll(".classBtn");
const submitBtn = document.querySelector(".submitBtn");
const nameTB = document.querySelector('.nameTB');
const facilityTB = document.querySelector('.facilityTB');
const locationTB = document.querySelector('.locationTB');
const complainTB = document.querySelector('.complainTB');
const alertName = document.querySelector('.alertNameText');
const alertClass = document.querySelector('.alertClassText');
const alertFacility = document.querySelector('.alertFacilityText');
const alertLocation = document.querySelector('.alertLocationText');
const alertComplain = document.querySelector('.alertComplainText');
const alertFile = document.querySelector('.alertFileText');

btnForm.textContent = title;
const titleObserver = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.target === document.head) {
      const newTitle = document.title;
      btnForm.textContent = newTitle;
      break;
    }
  }
});

titleObserver.observe(document.head, { subtree: true, childList: true });

let checkDropDown = false;
let checkClass = false;

function dropbtnClickHandler(event) {
  event.stopPropagation();
  triangle.style.transform = triangle.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  myDropdown.classList.toggle("show");
  myDropdown.style.zIndex = myDropdown.classList.contains("show") ? 3 : 0;
  if (!checkDropDown) {
    if (checkClass) {
      tbClassClickHandler(event);
    }
    dropdown.style.borderBottomRightRadius = "0px";
    dropdown.style.borderBottomLeftRadius = "0px";
    checkDropDown = true;
  } else {
    dropdown.style.borderBottomRightRadius = "15px";
    dropdown.style.borderBottomLeftRadius = "15px";
    checkDropDown = false;
  }
}

function tbClassClickHandler(event) {
  event.stopPropagation();
  triangleClass.style.transform = triangleClass.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  dropdownClass.classList.toggle("show");
  dropdownClass.style.zIndex = dropdownClass.classList.contains("show") ? 3 : 0;
  if (!checkClass) {
    if (checkDropDown) {
      dropbtnClickHandler(event);
    }
    checkClass = true;
  } else {
    checkClass = false;
  }
}

dropbtn.addEventListener("click", dropbtnClickHandler);
tbClass.addEventListener("click", tbClassClickHandler);

classBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const classContent = btn.textContent;
    classTB.textContent = classContent; // Changed from formatElement to classTB
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    myDropdown.classList.remove("show");
    myDropdown.style.zIndex = 0;
    triangle.style.transform = "rotate(0deg)"
    dropdown.style.borderBottomRightRadius = "15px";
    dropdown.style.borderBottomLeftRadius = "15px";
    checkDropDown = false;
  }
  if (!event.target.matches(".ClassDropbtn")) {
    dropdownClass.classList.remove("show");
    dropdownClass.style.zIndex = 0;
    triangleClass.style.transform = "rotate(0deg)"
  }
});

function alpha(word) {
  for (let i = 0; i < word.length; i++) {
    if ((word.charAt(i) < 'a' || word.charAt(i) > 'z') && (word.charAt(i) < 'A' || word.charAt(i) > 'Z') && word.charAt(i) !== " ") { // Fixed condition
      return false;
    }
  }
  return true; 
}

function check() {
  const name = nama();
  const classes = kelas();
  const facility = fasilitas();
  const location = lokasi();
  const complain = keluhan();

  if (!name || !classes || !facility || !location || !complain) {
    // Handle when validation fails
    return false;
  } else {
    
    document.querySelector('.popup').style.visibility = 'visible';

    setTimeout(() => {
        window.location.href = 'formKerusakan.html';
    }, 1000);
  }
}

function nama() {
  if (!nameTB.value || !alpha(nameTB.value)) { // Changed to nameTB.value and added value
    alertName.classList.add("show");
    return false;
  } else {
    alertName.classList.remove("show"); // Hide alert when validation passes
    return true;
  }
}

function kelas() {
  if (classTB.textContent === "KELAS") { // Changed to classTB.textContent
    alertClass.classList.add("show");
    return false;
  } else {
    alertClass.classList.remove("show"); // Hide alert when validation passes
    return true;
  }
}

function fasilitas() {
  if (!facilityTB.value) { // Added value
    alertFacility.classList.add("show");
    return false;
  } else {
    alertFacility.classList.remove("show"); // Hide alert when validation passes
    return true;
  }
}

function lokasi() {
  if (!locationTB.value) { // Added value
    alertLocation.classList.add("show");
    return false;
  } else {
    alertLocation.classList.remove("show"); // Hide alert when validation passes
    return true;
  }
}

function keluhan() {
  if (!complainTB.value) { // Added value
    alertComplain.classList.add("show");
    return false;
  } else {
    alertComplain.classList.remove("show"); // Hide alert when validation passes
    return true;
  }
}
