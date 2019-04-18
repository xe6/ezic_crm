const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/Home");

// Routers
// =============================================================================

router.get('/', (req, res) => HomeController.index(req, res));

// =============================================================================

module.exports = router;