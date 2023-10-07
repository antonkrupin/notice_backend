const express = require('express');

const noticeControllers = require('../controllers/notices-controller');

const router = express.Router();

router.get('/', noticeControllers.getNotices);

router.post('/addNotice', noticeControllers.addNotice);

router.delete('/notice/:id', noticeControllers.deleteNoticeById);

module.exports = router;