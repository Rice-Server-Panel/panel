const users  = require("../models/users")


async function checkVerify(res, req, next) {
    const users = await users.findOne({username: req.users.username})
    if (users.isVerified == true) {
        return next()
    } else {
        res.redirect("/panel/verify")
    }
}


function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect("/panel/login")
}

function checkNotAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/panel/login")
    }
    next()

}


module.exports.checkAuth = checkAuth
module.exports.checkNotAuth = checkNotAuth
module.exports.checkVerify = checkVerify

