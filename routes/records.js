const express = require('express');
const router = express.Router();
const rbacMiddleware = require('../middleware/rbacMiddleware');

// Import your controller
const recordsController = require('../controllers/recordsController');

// Protect the route with RBAC middleware
router.get('/records', rbacMiddleware.checkPermission('read_record'), recordsController.getAllRecords);

module.exports = router;