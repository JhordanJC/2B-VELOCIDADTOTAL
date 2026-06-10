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

    <div id="detailPanel" class="detail-panel hidden"></div>

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
        const stars = "&#9733;".repeat(car.rating) + "&#9734;".repeat(5 - car.rating);
        const badgeClass = car.status === "Certificado" ? "car-badge certified" : "car-badge";

        return `
        <article class="car-card">
            <div class="car-image-box">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <span class="${badgeClass}">${car.status}</span>
                <button class="favorite-button" type="button">&#9825;</button>
            </div>

            <div class="car-card-body">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-year">Modelo ${car.year}</p>

                <div class="rating-row">
                    <span>${stars}</span>
                    <p>(${car.reviews} resenas)</p>
                </div>

                <div class="specs-grid">
                    <div>
                        <span>&#9889;</span>
                        <small>POTENCIA</small>
                        <p>${car.power}</p>
                    </div>

                    <div>
                        <span>&#8599;</span>
                        <small>MOTOR</small>
                        <p>${car.engine}</p>
                    </div>
                </div>

                <strong class="price">$${car.price.toLocaleString()}</strong>

                <div class="card-actions">
                    <button type="button" class="detail-button" data-id="${car.id}">Ver detalle</button>
                </div>
            </div>
        </article>
        `;
    }).join("");

    const detailButtons = document.querySelectorAll(".detail-button");

    detailButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const carId = Number(button.dataset.id);
            const selectedCar = cars.find(function(car) {
                return car.id === carId;
            });

            showCarDetail(selectedCar);
        });
    });
}

function showCarDetail(car) {
    const detailPanel = document.getElementById("detailPanel");

    if (!car) {
        return;
    }

    detailPanel.classList.remove("hidden");
    detailPanel.innerHTML = `
        <div>
            <span class="detail-label">Detalle seleccionado</span>
            <h3>${car.brand} ${car.model}</h3>
            <p>${car.description}</p>
        </div>

        <ul>
            <li><strong>Modelo:</strong> ${car.year}</li>
            <li><strong>Tipo:</strong> ${car.type}</li>
            <li><strong>Combustible:</strong> ${car.fuel}</li>
            <li><strong>Precio:</strong> $${car.price.toLocaleString()}</li>
        </ul>
    `;
}
