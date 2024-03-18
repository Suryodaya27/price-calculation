const router = require("express").Router();
const calculatePrice = require("../controllers/distance.controller");


router.post("/distance", (req, res) => {
  try {
    const { item_type, zone, total_distance } = req.body;

    const price = calculatePrice(item_type, zone, total_distance);

    res.status(200).json({ price , item_type, zone, total_distance});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
