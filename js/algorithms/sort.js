export function bubbleSortByPrice (cars) {
    const orderedCars = [...cars];

   for (let i = 0; i < orderedCars.length - 1; i ++) {
        for (let j = 0; j < orderedCars.length - i - 1; j++) {
            if (orderedCars[j].price > orderedCars[j + 1].price) {
                const temp = orderedCars[j];
                orderedCars[j] = orderedCars[j+1];
                orderedCars[j+1] = temp;
            }
        }
    }
    return orderedCars;
}