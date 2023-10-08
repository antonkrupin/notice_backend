const Notice = require('../models/notice');

const getNotices = async (req, res, next) => {
  let notices;
  try {
    notices = await Notice.find();
  } catch (err) {
    console.log(err);
  }

  res.json(notices);
}

const addNotice = async (req, res, next) => {
  const { body, creationDate, id } = req.body;
  const createdNotice = new Notice({
    body,
    creationDate,
  })

  try {
    await createdNotice.save();
  } catch (err) {
    console.log(err);
  }

  res.json(createdNotice);
}

const getNoticeById = async (req, res, next) => {
  const noticeId = req.params.id;
	let notice;

	try {
		notice = await Notice.findById(noticeId);
	} catch (err) {
		const error = new HttpError('Something go wrong, could not find a place', 500);
		return next(error);
	}

  if (!notice) {
    const error = new HttpError('Could not find a place for the provided id.', 404);
		return next(error);
  }

  res.json(notice);
};

const updateNoticeById = async (req, res, next) => {
  const id = req.params.id;
  const { body } = req.body;

  let notice;
  try {
    notice = await Notice.findById(id);
  } catch (err) {
    console.log(err);
  }

  notice.body = body;
  notice.editDate = new Date().toLocaleString("ru");

  try {
    await notice.save();
  } catch (err) {
    console.log(err);
  }

  res.json(notice);
}

const deleteNoticeById = async (req, res, next) => {
  const id = req.params.id;
  let notice;
  try {
    notice = await Notice.findById(id);
  } catch (err) {
    console.log(err);
  }

  try {
    notice.deleteOne();
  } catch (err) {
    console.log(err);
  }

  res.json('notice deleted');
}

exports.getNotices = getNotices;
exports.addNotice = addNotice;
exports.getNoticeById = getNoticeById;
exports.updateNoticeById = updateNoticeById;
exports.deleteNoticeById = deleteNoticeById;