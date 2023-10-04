let modal = document.getElementById('myModal')
let courtChoice = document.getElementById('court-choice')

courtChoice.onclick = function showModal() {
    if (courtChoice.value == 'zero') {
        document.querySelector('.modal').modal.style.display = 'none';
    } else {
        document.querySelector('.modal').modal.style.display = 'block';
    }
}

courtChoice.addEventListener('change', function showModal() {
    document.querySelector('.modal').style.display = 'block'
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
    myModal.style.display = 'none';
    successModal.style.display = 'block';
}

function submitError() {
    errorModal.style.display = 'block';
    successModal.style.display = 'none';
    modal.style.display = 'block'
}

function hideSubmitError() {
    errorModal.style.display = 'none';
}

function hideSubmitSuccessful() {
    successModal.style.display = 'none'
    redirectToPage(); 
}

function redirectToPage() {
    window.location.href = 'http://127.0.0.1:3002/index.html';
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