import { CarAdapter } from "../patterns/CarAdapter.js";
import { CarFactory } from "../patterns/CarFactory.js";

export class CarService {
    static async getCars() {
        const response = await fetch("./data.json");

        if (!response.ok) {
            throw new Error("No se pudieron cargar los carros");

        }
        const rawCars = await response.json();

        return rawCars.map(function (rawCar) {
            const adapterCar = CarAdapter.adapt(rawCar);
            return CarFactory.createCar(adapterCar);
        });
    }
}