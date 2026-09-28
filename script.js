const ageBox = document.getElementById("ageBox");

const ageInput = document.getElementById("ageInput");

const ageMessage = document.getElementById("ageMessage");

const calculator = document.getElementById("calculator");

const display = document.getElementById("display");


// التحقق من العمر

function checkAge() {

    const age = Number(ageInput.value);


    if (age <= 0) {

        ageMessage.textContent =
            "من فضلك أدخل عمراً صحيحاً.";

        return;
    }


    if (age >= 18) {

        ageBox.style.display = "none";

        calculator.style.display = "block";

    } else {

        ageMessage.textContent =
            "يجب أن يكون عمرك 18 سنة أو أكثر لاستخدام الآلة الحاسبة.";

    }

}


// إضافة رقم أو عملية

function appendToDisplay(value) {

    display.value += value;

}


// مسح الشاشة

function clearDisplay() {

    display.value = "";

}


// حذف آخر رقم

function deleteLast() {

    display.value =
        display.value.slice(0, -1);

}


// إجراء العملية الحسابية

function calculate() {

    if (display.value === "") {
        return;
    }


    try {

        display.value = eval(display.value);

    } catch (error) {

        display.value = "خطأ";

    }

}