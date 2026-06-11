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
            image: rawCar.image,
            status: rawCar.status,
            rating: rawCar.rating,
            reviews: rawCar.reviews,
            power: rawCar.power,
            engine: rawCar.engine,
            description: rawCar.description
        };
    }
}
