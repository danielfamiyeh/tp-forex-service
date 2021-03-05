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
};
