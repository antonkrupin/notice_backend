const express = require('express');

const noticeControllers = require('../controllers/notices-controller');

const router = express.Router();

router.post('/addNotice', noticeControllers.addNotice);

module.exports = router;