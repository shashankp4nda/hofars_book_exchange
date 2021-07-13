const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const connUrl = process.env.MONGO_URL

console.log(connUrl);

mongoose.connect(connUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DD not Connected", err)
});

module.exports = connUrl;