let modalblue1 = document.getElementById('myModal')
let modalblue2 = document.getElementById('blue2Modal')
let modalblue3 = document.getElementById('blue3Modal')
let modalblue4 = document.getElementById('blue4Modal')
let modalblue17pm = document.getElementById('blue1Modal7')
let modalblue27pm = document.getElementById('blue2Modal7')
let modalblue37pm = document.getElementById('blue3Modal7')
let modalblue47pm = document.getElementById('blue4Modal7')
let courtChoice = document.getElementById('court-choice')
let gameDay = document.getElementById('day-choice')
let fridayTime = document.getElementById('friday-time')

courtChoice.addEventListener('change', function showModal() {
    if (courtChoice.value == 'zero'){
        modalblue1.style.display = 'none';
    } 
    else if (courtChoice.value == 'blue1' && gameDay.value == 'friday' && fridayTime.value == '6pm') {
        modalblue1.style.display = 'block';
    } 
    else if (courtChoice.value == 'blue2' && gameDay.value == 'friday' && fridayTime.value == '6pm'){
        modalblue2.style.display = 'block';
    }
    else if (courtChoice.value == 'blue3' && gameDay.value == 'friday' && fridayTime.value == '6pm'){
        modalblue3.style.display = 'block';
    }
    else if (courtChoice.value == 'blue4' && gameDay.value == 'friday' && fridayTime.value == '6pm'){
        modalblue4.style.display = 'block';
    }
    else if (courtChoice.value == 'blue1' && gameDay.value == 'friday' && fridayTime.value == '7pm'){
        modalblue17pm.style.display = 'block';
    }
    else if (courtChoice.value == 'blue2' && gameDay.value == 'friday' && fridayTime.value == '7pm'){
        modalblue27pm.style.display = 'block';
    }
    else if (courtChoice.value == 'blue3' && gameDay.value == 'friday' && fridayTime.value == '7pm'){
        modalblue37pm.style.display = 'block';
    }
    else if (courtChoice.value == 'blue4' && gameDay.value == 'friday' && fridayTime.value == '7pm'){
        modalblue47pm.style.display = 'block';
    }
    else {
    }
})


//////////////////////

const myModal = document.getElementById('myModal')
const submitButton = document.getElementById('submit-button');
const successModal = document.getElementById('successModal');
const successMessage = document.getElementById('success-message');
const errorModal = document.getElementById('errorModal');
const errorMessage = document.getElementById('error-message');
const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const form = document.getElementById('myForm');

function submitSuccessful() {
    successModal.style.display = 'block';
    myModal.style.display = 'none';
    errorModal.style.display = 'none'
}

function submitError() {
    errorModal.style.display = 'block';
    successModal.style.display = 'none';
    myModal.style.display = 'block'
}

function hideSubmitError() {
    errorModal.style.display = 'none';
}

function hideSubmitSuccessful() {
    successModal.style.display = 'none'
    redirectToPage(); 
}

function redirectToPage() {
    window.location.href = 'http://127.0.0.1:3000/index.html';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (homeScore.value.trim() === "" || awayScore.value.trim() === "")
    {submitError();
        setTimeout(function() {
            hideSubmitError();
        }, 700)
    } else {
        submitSuccessful();
        setTimeout(function() {
            hideSubmitSuccessful();
        }, 1000)
    }

})
