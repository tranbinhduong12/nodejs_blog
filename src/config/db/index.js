const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_blog_dev');

        console.log('connect successfully !!!');
    } catch (err) {
        console.log('connect fail !!!');
    }
}

module.exports = { connect };
