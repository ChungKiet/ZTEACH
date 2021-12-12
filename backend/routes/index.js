const home = require('./home');
const posts = require('./posts');
const new_post = require('./new_post');
const users = require('./users');

function route(app) {

    // // Danh sach lop
    // app.post('/danh-sach-lop', (req, res, next) => {
    //     var x = req.body;
    //     console.log(req.body);
    //     res.send(x);
    // });

    // app.get('/danh-sach-lop', (req, res, next) => {
    //     //console.log(req.body);
    //     res.send('<h1>Danh sach lop GET</h1>');
    // });

    //------------------------------------------------
    // Danh sách bài đăng
    app.use('/posts', posts);

    // Đăng bài
    app.use('/new-post', new_post);

    // Người dùng
    app.use('/users', users);

    // Trang chủ
    app.use('/', home);

}
module.exports = route;
