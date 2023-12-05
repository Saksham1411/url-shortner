const URL = require('../models/url');
const { nanoid } = require("nanoid");

const generateNewURL = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }
    const url = await URL.find({ redirectLink: body.url });
    let shortID;
    console.log(url);
    if (url.length==0) {
        shortID = nanoid(8);
        await URL.create({
            shortId: shortID,
            redirectLink: body.url,
            visitHistory: [],
        });
    }else{
        shortID = url[0].shortId;
    }

    return res.render("home", { id: shortID });
    // return res.json({ id: shortID });
}

const redirectWebsite = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    });
    res.redirect(entry.redirectLink);
}

const getAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.find({ shortId });
    // res.send({ result[0] });
    res.status(200).json({
        totalClicks: result[0].visitHistory.length,
        analytics: result[0].visitHistory,
    })
}

module.exports = {
    generateNewURL,
    redirectWebsite,
    getAnalytics
};