const path = require('path')
const fs = require('fs');
const multer = require('multer');
const Image = require('../models/images');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload_image = multer({ storage: storage });

class ImageController {

    index(req, res) {
        res.status(200).render("image_page.html");
    }

    async upload(req, res, next) {
        upload_image.single("image");
        const image = {
            img_type: req.body.img_type,
            use: req.body.use,
            name: req.body.name,
            desc: req.body.desc,
            // img_data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.name))
        }
        console.log(req.body.image);
        // try {
        //     await Image.create(image);
        res.status(200).send({
            "message": "Image upload successfully."
            // "error": { "code": 200, "message": "Success." }
        });
        // }
        // catch {
        //     res.status(500).send({
        //         "message": "Image upload failed."
        //         // "error": { "code": 401, "message": "Internal Server Error." }
        //     });
        // }
    }

    async get_profile_img(req, res, next) {
        const user = req.body.user;
        const image = Image.findOne({ img_type: 0, user: user });
        if (image) {
            res.status(200).render('image_render', { image });
        }
        else {
            res.status(404).send({
                "message": "Image load failed."
                // "error": { "code": 404, "message": "Not Found." }
            });
        }
    };
}

module.exports = new ImageController;
