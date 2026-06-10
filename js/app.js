import {router} from "./router.js";

function updateSessionStatus() {
    const sessionStatus = document.getElementById("sessionStatus");
    const savedUser = JSON.parse(localStorage.getItem("userSession"));

    if (!sessionStatus) {
        return;
    }

    if (savedUser && savedUser.logged) {
        sessionStatus.innerHTML = ` 
        <button id = "logoutButton" class = "logout-button">
        Cerrar Sesion</button>
        `;
        const logoutButton = document.getElementById("logoutButton"); 

        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("userSession");
            updateSessionStatus();
            window.location.hash = "#home";
        });
    } else {
        sessionStatus.innerHTML = `<a href="#login">Iniciar sesion</a>`;
    }
}

window.addEventListener("DOMContentLoaded", function(){
    router ();
    updateSessionStatus();
});
window.addEventListener("hashchange", function (){
    router ();
    updateSessionStatus();
});

window.addEventListener("storage", updateSessionStatus);