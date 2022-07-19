const mongoose = require('mongoose')

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected!`)
}

module.exports = {
    connectDB
}