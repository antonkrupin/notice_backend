const express = require('express');

const noticeControllers = require('../controllers/notices-controller');

const router = express.Router();

router.get('/', noticeControllers.getNotices);

router.post('/addNotice', noticeControllers.addNotice);

module.exports = router;