const express = require('express');
const router = express.Router();
const { generateNewURL, redirectWebsite, getAnalytics } = require('../controllers/url');

router.post('/', generateNewURL);
router.get('/:shortId', redirectWebsite);
router.get('/analytics/:shortId', getAnalytics);

module.exports = router;