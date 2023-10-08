const express = require('express');

const noticeControllers = require('../controllers/notices-controller');

const router = express.Router();

router.get('/', noticeControllers.getNotices);

router.get('/editNotice/:id', noticeControllers.getNoticeById);

router.post('/addNotice', noticeControllers.addNotice);

router.patch('/editNotice/:id', noticeControllers.updateNoticeById);

router.delete('/notice/:id', noticeControllers.deleteNoticeById);

module.exports = router;