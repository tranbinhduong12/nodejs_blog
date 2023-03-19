const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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
        deletedAt: { type: Date },
    },
    {
        timestamps: true,
    },
);

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
