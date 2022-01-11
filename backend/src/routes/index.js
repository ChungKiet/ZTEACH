const home = require('./home');
const posts = require('./posts');
const users = require('./users');
const tutors = require('./tutors');
const connects = require('./connects')

function route(app) {

    // Bài đăng
    app.use('/posts', posts);

    // Học viên
    app.use('/users', users);

    // Gia sư
    app.use('/tutors', tutors);

    // Kết nối
    app.use('/connects', connects);

    // Xử lý ảnh
    // app.use('/images', images);

    // Trang chủ
    app.use('/', home);

}
module.exports = route;
