// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submit-button");
//     const errorModal = document.getElementById('errorModal');
//     const successModal = document.getElementById('successModal');
//     const successMessage = document.getElementById('success-message');
//     const errorMessage = document.getElementById('error-message');
//     const input1 = document.getElementById('input1');
//     const input2 = document.getElementById('input2');
//     const form = document.getElementById("myForm");

//     function submitSuccessful(){
//         modal.style.display = 'none';
//         successModal.style.display = "block"
//     }

//     function showErrorMessage() {
//         errorModal.style.display = 'block';
//     }

//     function redirectToPage() {
//         window.location.href = "http://127.0.0.1:3002/index.html"
//     }

//     function hideSuccessfulMessage() {
//         successModal.style.display = 'block'
//     }

//     function hideErrorMessage () {
//         errorModal.style.display = 'none';
//     }

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         if (input1.value.trim() === "" || input2.value.trim() === "")
//         {showErrorMessage();
//             setTimeout(function () {
//             hideErrorMessage();}, 700)
//         } else {
//             submitSuccessful();
//             setTimeout(function() {
//                 hideSuccessfulMessage();}, 1000)
//         }
// });})