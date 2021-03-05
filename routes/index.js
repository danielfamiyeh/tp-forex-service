const { getInfo } = require("./../controllers");
const router = require("express").Router();

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Forex service." })
);

router.get("/:symbol/info", getInfo);

module.exports = router;
