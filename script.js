// Select Friday (day) - shows friday-time drop down menu

const fridaySelect = document.getElementById('day-choice');
const fridayCourtSelect = document.getElementById('court-choice');
const fridayTimeSelect = document.getElementById('friday-time');

fridaySelect.addEventListener("change", function() {
    if (fridaySelect.value === 'friday') {
        document.querySelector('.friday-time').style.display = 'block';
    } else {
        document.querySelector('.friday-time').style.display = 'none';
        document.querySelector('.courts').style.display = 'none';
    }
});

fridayTimeSelect.addEventListener('change', function() {
    document.querySelector('.courts').style.display = 'block';
});

// Select Saturday (day) - shows saturday-time drop down menu

const saturdaySelect = document.getElementById ('day-choice');
const saturdayCourtSelect = document.getElementById ('court-choice');
const saturdayTimeSelect = document.getElementById('saturday-time');

saturdaySelect.addEventListener("change", function() {
    if (saturdaySelect.value === 'saturday') {
        document.querySelector('.saturday-time').style.display = 'block';
    } else {
        document.querySelector('.saturday-time').style.display = 'none';
        document.querySelector('.courts').style.display = 'none';
    }
});

saturdayTimeSelect.addEventListener('change', function() {
    document.querySelector('.courts').style.display = 'block';
});

// Select Sunday (day) - shows sunday-time drop down menu

const sundaySelect = document.getElementById ('day-choice');
const sundayCourtSelect = document.getElementById ('court-choice');
const sundayTimeSelect = document.getElementById('sunday-time');

sundaySelect.addEventListener("change", function() {
    if (sundaySelect.value === 'sunday') {
        document.querySelector('.sunday-time').style.display = 'block';
    } else {
        document.querySelector('.sunday-time').style.display = 'none';
        document.querySelector('.courts').style.display = 'none';
    }
});

sundayTimeSelect.addEventListener('change', function() {
    document.querySelector('.courts').style.display = 'block';
});