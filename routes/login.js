const express = require('express')
const router = express.Router()
const {checkAuth, checkVerify, checkNotAuth, checkNotVerify} = require("../utils/authCheck")
const config = require("../config.json")
const passport = require("passport")

router.get("/panel/login", checkNotAuth, function (req, res) {
    res.render('pages/panel/login', { cloudname: config.cloudname, csrfToken: req.csrfToken()})
})

router.post("/panel/login", checkNotAuth, passport.authenticate("local", {
    successRedirect: "/panel/panel",
    failureRedirect: "/panel/login",
    failureFlash: true
  }))

module.exports = router