const axios = require("axios");

class Client {
	constructor(apiKey) {
		this._apiKey = apiKey;
		this.bindMethods();
	}

	bindMethods() {
		const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		methods
			.filter((method) => method !== "constructor")
			.forEach((method) => (this[method] = this[method].bind(this)));
	}

	URI(suffix) {
		return `https://api.finage.co.uk/${suffix}apikey=${this._apiKey}`;
	}

	async getInfo(symbol) {
		try {
			const info = await axios.get(
				this.URI(`detail/currency/${symbol}&`)
			);

			return info.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}
}

module.exports = Client;
