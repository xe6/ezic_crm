const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/Home");
const AuthController = require("../controllers/api/Auth");

// Routers
// =============================================================================

router.get('/', (req, res) => HomeController.index(req, res));
router.get('/register', (req, res) => AuthController.register(req, res));

// =============================================================================

module.exports = router;