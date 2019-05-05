const express = require("express");
const router = express.Router();
const SecuredMiddleware = require("../middleware/authMiddleware");
const TeachersController = require("../controllers/api/secured/Teachers");
const ClientsController = require("../controllers/api/secured/Clients");
const CoursesController = require("../controllers/api/secured/Courses");

// Routers
// =============================================================================
router.use(SecuredMiddleware);
router.get('/', (req, res) => res.json({ msg: "Hi!" }));

//Teachers
router.get('/teachers', (req, res) => TeachersController.getAll(req, res));
//Clients
router.get('/clients', (req, res) => ClientsController.getAll(req, res));
//Courses
router.get('/courses', (req, res) => CoursesController.getAll(req, res));
// =============================================================================

module.exports = router;