import LocalStorage from './Local';

class Storage {
    updateClient(storage) {
        const me = this;
        switch (storage) {
            default:
                me.client = LocalStorage;
        }
    }

    get(key) {
        return this.client.get(key);
    }

    set(key, value) {
        this.client.set(key, value);
    }
}

const storage = new Storage();

export default storage;
