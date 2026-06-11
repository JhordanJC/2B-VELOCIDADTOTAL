export class Car {
    #id;
    #brand;
    #model;
    #year;
    #price;
    #type;
    #fuel;
    #image;
    #status;
    #rating;
    #reviews;
    #power;
    #engine;
    #description;

    constructor(id, brand, model, year, price, type, fuel, image, status, rating, reviews, power, engine, description) {
        this.#id = id;
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#price = price;
        this.#type = type;
        this.#fuel = fuel;
        this.#image = image;
        this.#status = status;
        this.#rating = rating;
        this.#reviews = reviews;
        this.#power = power;
        this.#engine = engine;
        this.#description = description;
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

    get status() {
        return this.#status;
    }

    get rating() {
        return this.#rating;
    }

    get reviews() {
        return this.#reviews;
    }

    get power() {
        return this.#power;
    }

    get engine() {
        return this.#engine;
    }

    get description() {
        return this.#description;
    }
}
