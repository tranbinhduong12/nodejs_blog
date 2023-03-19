const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_blog_dev', {
            // useNewUrlParser: true,
            // userUnifiedTopology: true,
            // useCreateIndex: true,
        });

        console.log('connect successfully !!!');
    } catch (error) {
        console.log('connect fail !!!');
    }
}

module.exports = { connect };
