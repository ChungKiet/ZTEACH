const home = require('./home');
const posts = require('./posts');
const users = require('./users');

function route(app) {

    // Danh sách bài đăng
    app.use('/posts', posts);

    // Người dùng
    app.use('/users', users);

    // Trang chủ
    app.use('/', home);

}
module.exports = route;
