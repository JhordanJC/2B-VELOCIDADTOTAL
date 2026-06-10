class StoreSingleton {
    static instance;
    #state;
    constructor() {
        if (StoreSingleton.instance) { 
            return StoreSingleton.instance;
        }
        this.#state = {
            searchText: localStorage.getItem("searchText") || "",
            sortBy: localStorage.getItem("sortBy") || "" 
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
}
export const store = new StoreSingleton();