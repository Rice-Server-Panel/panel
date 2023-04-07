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
  
    res.redirect("/login")
}


module.exports.checkAuth = checkAuth
module.exports.checkVerify = checkVerify

