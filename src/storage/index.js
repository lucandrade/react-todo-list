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
        return this.client.set(key, value);
    }

    add(listName, value) {
        return this.client.add(listName, value);
    }

    findById(listName, id) {
        return this.client.findById(listName, id);
    }

    update(listName, id, data) {
        return this.client.update(listName, id, data);
    }
}

const storage = new Storage();

export default storage;
