const Course = require('../models/Course');
const { mutipleMongooseToobject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {

        if(req.query.hasOwnProperty('_sort')) {
        }


        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToobject(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToobject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
