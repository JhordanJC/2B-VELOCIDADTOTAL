import {homeView} from "./views/homeView.js";
import {catalogView, initCatalogView} from "./views/catalogView.js";
import {loginView} from "./views/loginView.js";

export function router(){
    const app = document.getElementById("app");
    const route = window.location.hash || "#home";

    if (route === "#home") {
        app.innerHTML = homeView();
    }
    
    if (route === "#catalogo") {
        app.innerHTML = catalogView();
        initCatalogView()
    }

    if (route === "#login") {
        app.innerHTML = loginView();
    }
}