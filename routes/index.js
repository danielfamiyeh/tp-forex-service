const router = require("express").Router();

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Forex service." })
);

module.exports = router;
