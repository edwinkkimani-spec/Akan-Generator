// Akan day names, indexed by JavaScript's Date.getDay() (0 = Sunday ... 6 = Saturday)
const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
};

const dayLabels = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function calculateAkanName() {
    const resultDisplay = document.getElementById("resultDisplay");

    const date = parseInt(document.getElementById("date").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);
    const gender = document.getElementById("gender").value;

    if (!date || !month || !year || !gender) {
        resultDisplay.textContent = "Please fill in all fields.";
        return;
    }

    const birthDate = new Date(year, month - 1, date);

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== date 
    ) { 
        resultDisplay.textContent = "Please enter a valid date.";
        return;
    }

    const dayIndex = birthDate.getDay();
    const dayName = dayLabels[dayIndex];
    const akanName = akanNames[gender][dayIndex];

    resultDisplay.textContent =
        "You were born on a " + dayName + ". Your Akan name is " + akanName + "!";
}

function resetResult() {
    document.getElementById("resultDisplay").textContent = "";
}

document.getElementById("submitBtn").addEventListener("click", calculateAkanName);
document.getElementById("resetBtn").addEventListener("click", resetResult);