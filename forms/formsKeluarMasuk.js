const title = document.title;
const btnForm = document.querySelector('.btnForm');
const dropdown = document.querySelector(".dropdown");
const myDropdown = document.getElementById("myDropdown");
const triangle = document.querySelector(".triangle");
const dropbtn = document.querySelector(".dropbtn");
const triangleClass = document.querySelector(".triangleClass");
const tbClass = document.querySelector(".tbClass");
const dropdownClass = document.querySelector(".classDropdown-content");
const classTB = document.querySelector('.ClassBtnForm');
const classBtns = document.querySelectorAll(".classBtn");
const trianglePermission = document.querySelector(".trianglePermission");
const tbPermission = document.querySelector(".tbPermission");
const dropdownPermission = document.querySelector(".permissionDropdown-content");
const permissionTB = document.querySelector('.PermissionBtnForm');
const permissionBtns = document.querySelectorAll(".permissionBtn");
const triangleResponsible = document.querySelector(".triangleResponsible");
const tbResponsible = document.querySelector('.tbResponsible');
const responTB = document.querySelector(".ResponsibleDropbtn");
const dropdownResponsible = document.querySelector(".responsibleDropdown-content");
const responsibleTB = document.querySelector('.ResponsibleBtnForm');
const responsibleBtns = document.querySelectorAll(".responsibleBtn");
const submitBtn = document.querySelector(".submitBtn");
const nameTB = document.querySelector('.nameTB');
const facilityTB = document.querySelector('.facilityTB');
const locationTB = document.querySelector('.locationTB');
const complainTB = document.querySelector('.complainTB');
const alertName = document.querySelector('.alertNameText');
const alertClass = document.querySelector('.alertClassText');
const alertPermission = document.querySelector('.alertPermissionText');
const alertResponsible = document.querySelector('.alertResponsibleText');
const alertFacility = document.querySelector('.alertFacilityText');
const alertLocation = document.querySelector('.alertLocationText');
const alertComplain = document.querySelector('.alertComplainText');

let activeClassBtn = null;
let activePermissionBtn = null;
let activeResponsibleBtn = null;

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

let clickOpt = false;
let clickClass = false;

let checkDropDown = false;
let checkClass = false;
let checkRespon = false;
let checkPermission = false;

function dropbtnClickHandler(event) {
  event.stopPropagation();
  triangle.style.transform = triangle.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  myDropdown.classList.toggle("show");
  myDropdown.style.zIndex = myDropdown.classList.contains("show") ? 3 : 0;
  if (!checkDropDown) {
    if (checkClass) {
      tbClassClickHandler(event);
    }
    if (checkRespon) {
      responTBClickHandler(event);
    }
    if (checkPermission) {
      tbPermissionClickHandler(event);
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
      if (checkRespon) {
        responTBClickHandler(event);
      }
      if (checkPermission) {
        tbPermissionClickHandler(event);
      }
    checkClass = true;
} else {
    checkClass = false;
}
}

dropbtn.addEventListener("click", dropbtnClickHandler);
tbClass.addEventListener("click", tbClassClickHandler);

function responTBClickHandler(event) {
    event.stopPropagation();
    triangleResponsible.style.transform = triangleResponsible.style.transform.includes("rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)";
    dropdownResponsible.classList.toggle("show");
    dropdownResponsible.style.zIndex = dropdownResponsible.classList.contains("show") ? 3 : 0;
    if (dropdownResponsible.classList.contains("show")) {
        if (checkDropDown) {
            dropbtnClickHandler(event);
        }
        if (checkClass) {
          tbClassClickHandler(event);
        }
        if (checkPermission) {
          tbPermissionClickHandler(event);
        }
        checkRespon = true;
    } else {
        checkRespon = false;
    }
}

responTB.addEventListener("click", responTBClickHandler);

function tbPermissionClickHandler(event) {
  event.stopPropagation();
  if (trianglePermission.style.transform.includes("rotate(180deg)")) {
    trianglePermission.style.transform = "rotate(0deg)";
  } else {
    trianglePermission.style.transform = "rotate(180deg)";
  }
  dropdownPermission.classList.toggle("show");
  if (dropdownPermission.classList.contains("show")) {
        if (checkDropDown) {
            dropbtnClickHandler(event);
        }
        if (checkClass) {
          tbClassClickHandler(event);
        }
        if (checkRespon) {
          responTBClickHandler(event);
        }
    dropdownPermission.style.zIndex = 3;
    checkPermission = true;
  } else {
    dropdownPermission.style.zIndex = 0;
    checkPermission = false;
  }  
}

tbPermission.addEventListener("click", tbPermissionClickHandler);

classBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const classContent = btn.textContent;
    if (activeClassBtn) {
      activeClassBtn.classList.remove("active");
    }
    activeClassBtn = btn;
    activeClassBtn.classList.add("active");
    classTB.textContent = classContent;
  });
});

permissionBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const permissionContent = btn.textContent;
    if (activePermissionBtn) {
      activePermissionBtn.classList.remove("active");
    }
    activePermissionBtn = btn;
    activePermissionBtn.classList.add("active");
    permissionTB.textContent = permissionContent;
  });
});

responsibleBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const responsibleContent = btn.textContent;
    if (activeResponsibleBtn) {
      activeResponsibleBtn.classList.remove("active");
    }
    activeResponsibleBtn = btn;
    activeResponsibleBtn.classList.add("active");
    responsibleTB.textContent = responsibleContent;
  });
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    myDropdown.classList.remove("show");
    myDropdown.style.zIndex = 0;
    triangle.style.transform = "rotate(0)";
    dropdown.style.borderBottomRightRadius = "15px";
    dropdown.style.borderBottomLeftRadius = "15px";
    checkDropDown = false;
  }
  if (!event.target.matches(".ClassDropbtn")) {
    dropdownClass.classList.remove("show");
    dropdownClass.style.zIndex = 0;
    triangleClass.style.transform = "rotate(0)";
  }
  if (!event.target.matches(".PermissionDropbtn")) {
    dropdownPermission.classList.remove("show");
    dropdownPermission.style.zIndex = 0;
    trianglePermission.style.transform = "rotate(0)";
  }
  if (!event.target.matches(".ResponsibleDropbtn")) {
    dropdownResponsible.classList.remove("show");
    dropdownResponsible.style.zIndex = 0;
    triangleResponsible.style.transform = "rotate(0)";
  }
});

function alpha(word) {
  for (let i = 0; i < word.length; i++) {
    if ((word.charAt(i) < 'a' || word.charAt(i) > 'z') && (word.charAt(i) < 'A' || word.charAt(i) > 'Z') && word.charAt(i) !== " ") {
      return false;
    }
  }
  return true;
}

function check() {
  const name = nama();
  const classes = kelas();
  const permission = ijin();
  const facility = fasilitas();
  const location = lokasi();
  const complain = keluhan();
  const izin = perizinan();

  if (!name || !classes || !permission || !facility || !location || !complain || !izin) {
    return false;
  } else {
    
    document.querySelector('.popup').style.visibility = 'visible';

    setTimeout(() => {
        window.location.href = 'formKeluarMasuk.html';
    }, 1000);
  }
}

function nama() {
  if (!nameTB.value || !alpha(nameTB.value)) {
    alertName.classList.add("show");
    return false;
  } else {
    alertName.classList.remove("show");
    return true;
  }
}

function kelas() {
  if (classTB.textContent === "KELAS") {
    alertClass.classList.add("show");
    return false;
  } else {
    alertClass.classList.remove("show");
    return true;
  }
}

function ijin() {
  if (permissionTB.textContent === "PILIH") {
    alertPermission.classList.add("show");
    return false;
  } else {
    alertPermission.classList.remove("show");
    return true;
  }
}

function perizinan() {
  if (responsibleTB.textContent === "PILIH") {
    alertResponsible.classList.add("show");
    return false;
  } else {
    alertResponsible.classList.remove("show");
    return true;
  }
}

function fasilitas() {
  if (!facilityTB.value) {
    alertFacility.classList.add("show");
    return false;
  } else {
    alertFacility.classList.remove("show");
    return true;
  }
}

function lokasi() {
  if (!locationTB.value) {
    alertLocation.classList.add("show");
    return false;
  } else {
    alertLocation.classList.remove("show");
    return true;
  }
}

function keluhan() {
  if (!complainTB.value) {
    alertComplain.classList.add("show");
    return false;
  } else {
    alertComplain.classList.remove("show");
    return true;
  }
}
