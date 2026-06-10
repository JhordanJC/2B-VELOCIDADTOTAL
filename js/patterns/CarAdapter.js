export class CarAdapter {
    static adapt(rawCar) {
        return {
            id: rawCar.id,
            brand: rawCar.brand,
            model: rawCar.model,
            year: rawCar.year,
            price: rawCar.price,
            type: rawCar.type,
            fuel: rawCar.fuel,
            image: rawCar.image
        };
    }
}