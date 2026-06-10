export class Car {
    #id;
    #brand;
    #model;
    #year;
    #price;
    #type;
    #fuel;
    #image;

    constructor(id, brand, model, year, price, type, fuel, image) {
        this.#id = id;
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#price = price;
        this.#type = type;
        this.#fuel = fuel;
        this.#image = image;
    }
    get id() {
        return this.#id;
    }
    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    get year() {
        return this.#year;
    }

    get price() {
        return this.#price;
    }

    get type() {
        return this.#type;
    }

    get fuel() {
        return this.#fuel;
    }

    get image() {
        return this.#image;
    }
}