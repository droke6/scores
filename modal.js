

var modal = document.getElementById('myModal')
var courtChoice = document.getElementById('court-choice')
var btn= document.getElementById("close")[0]
var errorModal = document.getElementById('error-message')

courtChoice.onclick = function(){
    if (courtChoice.value === 'zero') {
        document.querySelector('.modal').modal.style.display = 'none';
    } else{
        document.querySelector('.modal').style.display = 'block';
    }
}

courtChoice.addEventListener('change', function() {
    document.querySelector('.modal').style.display = 'block';
})


/////////////////////////////////////////////////////////////////////////////////


function submitScore(){
    modal.style.display = 'none';
    errorModal.style.display = "block"
}

function showErrorMessage() {
    errorModal.style.display = 'block';
    setTimeout(function () {
        hideErrorMessage();}, 700);
}

function hideErrorMessage () {
    errorModal.style.display = 'none';
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();

    if (input1 === "" || input2 === ""){
        showErrorMessage();
        
}})