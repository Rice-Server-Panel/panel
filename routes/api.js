const express = require("express") 
const router = express.Router()

const users = require("../models/users")

router.use(function (res, req, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
    next()
})