//Dependencies and Configurations
const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./controllers/users")
require("dotenv").config()

const app = express()

//MIDDLEWARE
app.use(express.json())

//Routes
app.use("/users", userRoutes)

//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))