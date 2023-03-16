const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVPKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjjzJ9kx5nSpVLQ-RaVLKieUEKxg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    // store()
    //     .then((req) => {
    //         const formData = req.body;
    //     formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVPKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjjzJ9kx5nSpVLQ-RaVLKieUEKxg`;
    //     const course = new Course(formData);
    //     course.save()
    //     .then(() => res.redirect('/'))
    //     .catch( error => {

    //     })
    //     }).catch((error) => {

    //     })
}

module.exports = new CourseController();
