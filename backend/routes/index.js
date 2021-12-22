const home = require('./home');
const posts = require('./posts');
const users = require('./users');
const tutors = require('./tutors');

function route(app) {

    // Bài đăng
    app.use('/posts', posts);

    // Học viên
    app.use('/users', users);

    // Gia sư
    app.use('/tutors', tutors);

    // Trang chủ
    app.use('/', home);

}
module.exports = route;
