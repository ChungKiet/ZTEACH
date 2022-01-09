// import path from 'path'
// import express from 'express'
// import multer from 'multer'
// const router = express.Router()

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename(req, file, cb) {
//         cb(
//         null,
//         `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//         )
//     },
// })

// function checkFileType(file, cb) {
//     const filetypes = /jpg|jpeg|png/
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//     const mimetype = filetypes.test(file.mimetype)

//     if (extname && mimetype) {
//         return cb(null, true)
//     } else {
//         cb('Images only!')
//     }
// }

// const upload = multer({
//     storage,
//     fileFilter: function (req, file, cb) {
//         checkFileType(file, cb)
//     },
// })

// router.post('/', upload.single('image'), (req, res) => {
//     res.send(`/${req.file.path}`)
// })

// export default router

// // const express = require('express');
// // const route = express.Router();
// // const path = require('path')
// // const fs = require('fs');
// // const multer = require('multer');
// // const Image = require('../models/images');

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'uploads')
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, file.fieldname + '-' + Date.now())
// //     }
// // });

// // const upload = multer({ storage: storage });

// // route.get('/', (req, res) => {
// //     res.status(200).render("image_page.html");
// // });

// // route.post('/upload', upload.single('image'), (req, res, next) => {
// //     const image = {
// //         img_type: req.body.img_type,
// //         use: req.body.use,
// //         name: req.body.name,
// //         desc: req.body.desc,
// //         img_data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.name))
// //     }
// //     try {
// //         Image.create(image);
// //         res.status(200).send({
// //             "message": "Image upload successfully."
// //         });
// //     }
// //     catch {
// //         res.status(500).send({
// //             "message": "Image upload failed."
// //             // "error": { "code": 500, "message": "Internal Server Error." }
// //         });
// //     }
// // });

// // route.get('/get-profile-img', (req, res) => {
// //     const user = req.body.user;
// //     const image = Image.findOne({ img_type: 0, user: user });
// //     if (image) {
// //         res.render('image_render', { image });
// //     }
// //     else {
// //         res.status(404).send({
// //             "message": "Image load failed."
// //             // "error": { "code": 404, "message": "Not Found." }
// //         });
// //     }
// // });

// // module.exports = route
