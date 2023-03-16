const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: 'string', required: true },
        description: { type: 'string' },
        image: { type: 'string' },
        videoId: { type: 'string', required: true },
        level: { type: 'string' },
        // slug: { type: String, slug: 'name',},
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
