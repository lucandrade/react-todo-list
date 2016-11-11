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
}

// LocalStorage.prototype.get = (key) => {
// 	let value = this.getItem(key);
// 	try {
// 		return JSON.parse(value);
// 	} catch (e) {
// 		return value;
// 	}
// }

const storage = new LocalStorage();

export default storage;
