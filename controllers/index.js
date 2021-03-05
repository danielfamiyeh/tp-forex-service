const Finage = require("./../lib/finage");
const finageClient = new Finage(process.env.FINAGE_KEY);

module.exports = {
	getInfo: async (req, res) => {
		const { symbol } = req.params;
		const info = await finageClient.getInfo(symbol);

		res.json(info);
	},

	getPrice: async (req, res) => {
		const { symbol } = req.params;
		const price = await finageClient.getPrice(symbol);

		res.json(price);
	},

	getTicks: async (req, res) => {
		const { symbol, interval, from, to } = req.params;
		const ticks = await finageClient.getTicks(symbol, from, to, interval);

		res.json(ticks);
	},
};
