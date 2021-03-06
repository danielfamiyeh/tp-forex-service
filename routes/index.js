const {
	getInfo,
	getPrice,
	getTicks,
	getSearchResults,
} = require("./../controllers");
const router = require("express").Router();

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Forex service." })
);

router.get("/:symbol/info", getInfo);
router.get("/:symbol/price", getPrice);
router.get("/search/:query", getSearchResults);
router.get("/:symbol/ticks/:interval/:from/:to", getTicks);

module.exports = router;
