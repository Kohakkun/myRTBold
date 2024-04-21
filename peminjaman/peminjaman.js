const title = document.title;
const btnForm = document.querySelector('.btnForm');
const dropdown = document.querySelector(".dropdown");
const myDropdown = document.getElementById("myDropdown");
const triangle = document.querySelector(".triangle");
const triangleClass = document.querySelector(".triangleClass");
const tbClass = document.querySelector(".tbClass");
const dropdownClass = document.querySelector(".classDropdown-content");
const dropdownResponsible = document.querySelector(".responsibleDropdown-content");
const classTB = document.querySelector('.ClassBtnForm');
const classBtns = document.querySelectorAll(".classBtn");
const triangleResponsible = document.querySelector(".triangleResponsible");
const responsibleTB = document.querySelector('.ResponsibleBtnForm');
const responsibleBtns = document.querySelectorAll(".responsibleBtn");
const submitBtn = document.querySelector(".submitBtn");
const nameTB = document.querySelector('.nameTB');
const facilityTB = document.querySelector('.facilityTB');
const locationTB = document.querySelector('.locationTB');
const hariTB = document.querySelector('.hariTB');
const complainTB = document.querySelector('.complainTB');
const alertName = document.querySelector('.alertNameText');
const alertClass = document.querySelector('.alertClassText');
const alertResponsible = document.querySelector('.alertResponsibleText');
const alertFacility = document.querySelector('.alertFacilityText');
const alertLocation = document.querySelector('.alertLocationText');
const alertHari = document.querySelector('.alertHariText');
const alertComplain = document.querySelector('.alertComplainText');

let activeClassBtn = null;
let activeResponsibleBtn = null;

let clickOpt = false;
let clickClass = false;

triangle.addEventListener("click", function (event) {
    event.stopPropagation();
    triangle.style.transform = triangle.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    myDropdown.classList.toggle("show");
    myDropdown.style.zIndex = myDropdown.classList.contains("show") ? 3 : 0;
});

tbClass.addEventListener("click", function (event) {
    event.stopPropagation();
    triangleClass.style.transform = triangleClass.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    dropdownClass.classList.toggle("show");
    dropdownClass.style.zIndex = dropdownClass.classList.contains("show") ? 3 : 0;
});

triangleResponsible.addEventListener("click", function (event) {
    event.stopPropagation();
    triangleResponsible.style.transform = triangleResponsible.style.transform.includes("rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)";
    dropdownResponsible.classList.toggle("show");
    dropdownResponsible.style.zIndex = dropdownResponsible.classList.contains("show") ? 3 : 0;
    document.querySelector('.datepicker').style.visibility = dropdownResponsible.classList.contains("show") ? 'visible' : 'hidden';
});

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
    }
    if (!event.target.matches(".ClassDropbtn")) {
        dropdownClass.classList.remove("show");
        dropdownClass.style.zIndex = 0;
        triangleClass.style.transform = "rotate(0)";
    }
    if (event.target.matches(".ResponsibleDropbtn")) {
        dropdownResponsible.classList.remove("show");
        dropdownResponsible.style.zIndex = 0;
        triangleResponsible.style.transform = "rotate(0)";
    }
});

document.addEventListener("click", function(event) {
    const datePicker = document.querySelector('.datepicker');
    if (event.target !== datePicker && !datePicker.contains(event.target) && datePicker.style.visibility === 'visible') {
        datePicker.style.visibility = 'collapse';
        dropdownResponsible.classList.remove("show");
        dropdownResponsible.style.zIndex = 0;
        triangleResponsible.style.transform = "rotate(0)";
    }
});

myDropdown.querySelectorAll('.formBtn').forEach(item => {
    item.addEventListener('click', event => {
        btnForm.textContent = item.textContent;
        myDropdown.classList.remove("show");
        myDropdown.style.zIndex = 0;
        triangle.style.transform = "rotate(0)";
    });
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
    const facility = fasilitas();
    const daysresult = days();
    const complain = keluhan();
    const izin = perizinan();

    if (!name || !classes || !facility || !complain || !izin || !daysresult) {
        return false;
    } else {
        return true;
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

function days() {
    if (!hariTB.value) {
        alertHari.classList.add("show");
        return false;
    } else {
        alertHari.classList.remove("show");
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

// Integrated Date Picker Code
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();

function renderCalendar() {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    calendar.innerHTML = "";
    monthYear.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear();

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDayOfMonth) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                cell.classList.add("green-background");
                const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
                cell.onclick = () => {
                    responsibleTB.textContent = formattedDate;
                };
                date++;
            }
            row.appendChild(cell);
        }
        calendar.appendChild(row);
    }
}


function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
