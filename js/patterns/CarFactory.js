import {Car} from "../models/Car.js";

export class CarFactory {
    static createCar(carData) {
        return new Car(
            carData.id,
            carData.brand,
            carData.model,
            carData.year,
            carData.price,
            carData.type,
            carData.fuel,
            carData.image
        );
    }
}