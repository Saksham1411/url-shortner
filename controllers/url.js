const URL = require('../models/url');
const { nanoid } = require("nanoid");

const generateNewURL = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectLink: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

module.exports = { generateNewURL };