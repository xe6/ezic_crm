const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/Home");
const AuthController = require("../controllers/api/Auth");

// Routers
// =============================================================================

router.get('/', (req, res) => HomeController.index(req, res));
router.post('/register', (req, res) => AuthController.register(req, res));
router.post('/login', (req, res) => AuthController.login(req, res));

// =============================================================================

module.exports = router;