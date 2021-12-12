const { Router } = require('express');
const express = require('express');
const router = express.Router();



// Dang bai
router.use('/dang-bai', (req, res, next) => {
    console.log('Console: Dang bai');
    res.send('<form action="/danh-sach-lop" method="POST"><input type="text" name="Hoten"><button type="submit">Adddddd</button></form>');
});


// Danh sach lop
router.post('/danh-sach-lop', (req, res, next) => {
    var x = req.body;
    console.log(req.body);
    res.send(x);
});

router.get('/danh-sach-lop', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Danh sach lop GET</h1>');
});

// Trang chu
router.use('/trang-chu', (req, res, next) => {
    res.send('<h1>Trang chu</h1>');
});

module.exports = router;
