export class CarService {
    static async getCars() {
        const response = await fetch("./data.json");

        if (!response.ok) {
            throw new Error("No se pudieron cargar los carros");

        }
        const cars = await response.json();
        return cars;
    }
}