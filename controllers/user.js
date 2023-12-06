const USER = require('../models/user');

const userSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await USER.create({
        name, email, password,
    });
    return res.render("");
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await USER.find({ email, password });
    if (user.length==0) {
        return res.render("loginpage", {
            err: "Invalid User",
        })
    }
    res.redirect("/");
}




module.exports = { userSignup, userLogin };