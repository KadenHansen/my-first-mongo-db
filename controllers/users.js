const express = require("express")
const User = require("../models/user")

const router = express.Router()

router.post("/create", async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await new User({
            username,
            password
        }).save()

        res.status(201).json(user)
    } catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
})

module.exports = router