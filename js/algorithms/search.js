export function linearSearchCars(cars, text) {
    const query = text.toLowerCase().trim();

    return cars.filter(function (car) {
        const brand = car.brand.toLowerCase();
        const model = car.model.toLowerCase();
        const type = car.type.toLowerCase();

        return (
            brand.includes(query) ||
            model.includes(query) ||
            type.includes(query) 
        );
    }) ;
}