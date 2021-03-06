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

    findByText(listName, text) {
        return this.client.findByText(listName, text);
    }

    update(listName, id, data) {
        return this.client.update(listName, id, data);
    }

    remove(listName, id) {
        return this.client.remove(listName, id);
    }
}

const storage = new Storage();

export default storage;
