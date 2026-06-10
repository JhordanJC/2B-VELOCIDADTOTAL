import { CarService } from "../services/carService.js";
let cars = []
export function catalogView() {
    return `
    <section class="catalog">
    <div class="catalog-header">
    <h2>Catálogo de Autos</h2>
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
        renderCars(cars);

        searchInput.addEventListener("input", function(){
            const text = searchInput.value.toLowerCase();

            const filteredCars = cars.filter(function (car) {
                return (
                    car.brand.toLowerCase().includes(text) ||
                    car.model.toLowerCase().includes(text)
                );
            });
            renderCars(filteredCars);
        });
        sortButton.addEventListener("click", function (){
            const orderedCars = [...cars].sort(function (a, b) {
                return a.price - b.price;
            });
            renderCars(orderedCars);
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
        <article class="card-card">
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