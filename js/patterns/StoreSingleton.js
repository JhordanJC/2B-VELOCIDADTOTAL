class StoreSingleton {
    static instance;
    #state;
    constructor() {
        if (StoreSingleton.instance) { 
            return StoreSingleton.instance;
        }
        this.#state = {
            searchText: localStorage.getItem("searchText") || "",
            sortBy: localStorage.getItem("sortBy") || "",
            cart: JSON.parse(localStorage.getItem("cart")) || []
        };
        StoreSingleton.instance = this;
    }
    getState() {
        return this.#state;
    }
    setSearchText(text) {
        this.#state.searchText = text;
        localStorage.setItem("searchText", text);
    }
    setSortBy (sortBy) {
        this.#state.sortBy = sortBy;
        localStorage.setItem("sortBy", sortBy);
    }

    addCartItem(car) {
        const exists = this.#state.cart.some(function(item) {
            return item.id === car.id;
        });

        if (exists) {
            return;
        }

        this.#state.cart.push({
            id: car.id,
            brand: car.brand,
            model: car.model,
            price: car.price,
            image: car.image
        });

        localStorage.setItem("cart", JSON.stringify(this.#state.cart));
    }

    removeCartItem(carId) {
        this.#state.cart = this.#state.cart.filter(function(item) {
            return item.id !== carId;
        });

        localStorage.setItem("cart", JSON.stringify(this.#state.cart));
    }

    clearCart() {
        this.#state.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.#state.cart));
    }
}
export const store = new StoreSingleton();
