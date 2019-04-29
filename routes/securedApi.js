const express = require("express");
const router = express.Router();
const SecuredMiddleware = require("../middleware/authMiddleware");
const TeachersController = require("../controllers/api/secured/Teachers");

// Routers
// =============================================================================
router.use(SecuredMiddleware);
router.get('/', (req, res) => res.json({ msg: "Hi!" }));

//Teachers
router.get('/teachers', (req, res) => TeachersController.getAll(req, res));
// =============================================================================

module.exports = router;