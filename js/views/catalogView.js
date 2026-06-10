import { observer } from "../patterns/EventObserver.js";
import { store } from "../patterns/StoreSingleton.js";
import { bubbleSortByPrice } from "../algorithms/sort.js";
import { linearSearchCars } from "../algorithms/search.js";
import { CarService } from "../services/CarService.js";
let cars = []
export function catalogView() {
    return `
    <section class="catalog">
    <div class="catalog-header">
    <h2>Catalogo de Autos</h2>
    <p>Explora vehiculos exclusivos</p>
    </div>

    <div class="catalog-tools">
    <input
    type="text"
    id="searchInput"
    placeholder="Buscar por marca o modelo">
    
    <button id="sortButton">Ordenar por precio</button>
    </div>
    <p id="carCounter"></p>

    <div id="carsContainer" class="cars-grid"></div>
    </section>
    `;
}

export async function initCatalogView() {
    const container = document.getElementById("carsContainer");
    const searchInput = document.getElementById("searchInput");
    const sortButton = document.getElementById("sortButton");

    container.innerHTML = "<p>Cargando vehiculos...</p>"

    try {
        cars = await CarService.getCars();

        const savedState = store.getState();
        searchInput.value = savedState.searchText;

        let currentCars = cars;

        if (savedState.searchText) {
            currentCars = linearSearchCars(currentCars, savedState.searchText);
        }

        if (savedState.sortBy === "price") {
            currentCars = bubbleSortByPrice(currentCars);
        }

        renderCars(currentCars);

        searchInput.addEventListener("input", function () {
        store.setSearchText(searchInput.value);
        observer.notify("searchChanged", searchInput.value);

        const filteredCars = linearSearchCars(cars, searchInput.value);
        renderCars(filteredCars);
        });

        sortButton.addEventListener("click", function () {
        store.setSortBy("price");
        observer.notify("sortChanged", "price");

        const orderedCars = bubbleSortByPrice(cars);
        renderCars(orderedCars);
        });

        observer.subscribe("searchChanged", function (text) {
        console.log("Busqueda actualizada:", text);
        });

        observer.subscribe("sortChanged", function (sortBy) {
        console.log("Orden aplicado:", sortBy);
        });

    } catch (error) {
        container.innerHTML = "<p>Error al cargar los vehiculos</p>";
    }
    
}

function renderCars(carList) {
    const container = document.getElementById("carsContainer");
    const counter = document.getElementById("carCounter");

    counter.textContent = `${carList.length} vehiculos disponibles`;

    container.innerHTML = carList.map(function(car) {
        return `
        <article class="car-card">
        <img src="${car.image}" alt="${car.brand} ${car.model}">
        <div class="car-card-body">
        <h3>${car.brand} ${car.model}</h3>
        <p>${car.type} - ${car.fuel}</p>
        <strong>$${car.price.toLocaleString()}</strong>
        </div>
        </article>
        `;
    }).join("");
}