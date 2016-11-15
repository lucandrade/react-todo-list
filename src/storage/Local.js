import uuid from 'uuid';

class LocalStorage {
	constructor() {
		if (!window.localStorage) {
			throw new Error("This browser is not compatible with this application. Update yout browser");
		}

		this.client = window.localStorage;
	}

	get(key) {
		let value = this.client.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	}

	set(key, value) {
		if (typeof value === 'object') {
			value = JSON.stringify(value);
		}

		this.client.setItem(key, value);
	}

	forget(key) {
		this.client.removeItem(key);
	}

	findById(listName, id) {
        const list = this.get(listName);

        if (list) {
            const find = list.filter((item) => {
                return item.id === id;
            });

            if (find.length > 0) {
                return find[0];
            }
        }

        return false;
    }

	findByText(listName, text) {
        const list = this.get(listName);
		text = text ? text.toLowerCase() : '';

        if (list) {
            return list.filter((item) => {
                return item.text.toLowerCase().indexOf(text) >= 0;
            });
        }

        return false;
    }

	add(listName, value) {
		let list = this.get(listName);

		if (!(list instanceof Array)) {
			list = [];
		}

		if (typeof value === 'object') {
			value.id = uuid.v1();
		}

		list.push(value);
		this.set(listName, list);
	}

	update(listName, id, data) {
		const list = this.get(listName);

        if (list) {
            list.map((item) => {
                if (item.id === id) {
					Object.assign(item, data);
				}
				return item;
            });

			this.set(listName, list);
			return true;
        }

        return false;
	}

	remove(listName, id) {
		let list = this.get(listName);
		let pos = false;

        if (list) {
            list.map((item, i) => {
				if (item.id === id) {
					pos = i;
				}
				return item;
            });

			if (pos !== false) {
				list.splice(pos, 1);
			}

			this.set(listName, list);
			return true;
        }

        return false;
	}
}

const storage = new LocalStorage();

export default storage;
