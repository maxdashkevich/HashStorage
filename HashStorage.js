class HashStorage {
    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (!(key in this.storage)) {
            return false;
        } else return delete this.storage[key];
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}

const coctailsStorage = new HashStorage();

