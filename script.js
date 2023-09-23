// Get references to the select elements
const daySelect = document.getElementById('day-choice');
const courtSelect = document.getElementById('court-choice');
const timeSelect = document.getElementById('time-choice');

// Add an event listener to the day dropdown
daySelect.addEventListener("change", function() {
    if (daySelect.value === 'friday') {
        // Show the time dropdown
        document.querySelector('.friday-time').style.display = 'block';
    } else {
        // If a day other than Friday is selected, hide the time and court dropdowns
        document.querySelector('.friday-time').style.display = 'none';
        document.querySelector('.game-court').style.display = 'none';
    }
});

// Add an event listener to the time dropdown
timeSelect.addEventListener('change', function() {
    // Show the court dropdown when a time is selected
    document.querySelector('.game-court').style.display = 'block';
});

/////////////////////////////////////////////////////////////////////////////////////


const daySelect2 = document.getElementById ('day-choice');
const courtSelect2 = document.getElementById ('court-choice2');
const timeSelect2 = document.getElementById('time-choice2');

daySelect2.addEventListener("change", function() {
    if (daySelect2.value === 'saturday') {
        document.querySelector('.saturday-time').style.display = 'block';
    } else {
        document.querySelector('.saturday-time').style.display = 'none';
        document.querySelector('.game-court2').style.display = 'none';
    }
});

timeSelect2.addEventListener('change', function() {
    document.querySelector('.game-court2').style.display = 'block';
});

/////////////////////////////////////////////////////////////////////////////////////

const daySelect3 = document.getElementById('day-choice');
const courtSelect3 = document.getElementById('court-choice3');
const timeSelect3 = document.getElementById('time-choice3');

daySelect3.addEventListener('change', function() {
    if (daySelect3.value === 'sunday') {
        document.querySelector('.sunday-time').style.display  = 'block';
    } else {
        document.querySelector('.sunday-time').style.display = 'none';
        document.querySelector('.game-court3').style.display = 'none';
    }
});

timeSelect3.addEventListener('change', function() {
    document.querySelector('.game-court3').style.display = 'block';
});