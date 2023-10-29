
const multer = require('multer');
const path = require('path')
const fs = require("fs");

module.exports.uploadSingleFile = (destinationFolder,fieldname) => {
    let dest = '.' + destinationFolder
    return (req, res, next) => {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
                cb(null, dest);
            },
            filename: function (req, file, cb) {
                cb(null, "1_" + file.fieldname + "-" + Date.now() + path.extname(file.originalname));
            }
        });
        const upload = multer({ storage: storage }).single(fieldname)

        upload(req, res, async (err) => {
            if (err) {
                res.status(400).send({ msg: "Something went wrong during file upload!", error: err });
            }else{
                if(req.file)
                    req.body[req.file.fieldname] = JSON.stringify(destinationFolder + '/' + req.file.filename)
                // await this.parseData(req)
                req.body.translations = JSON.parse(req.body.translations);
                if (req.body.document){
                    req.body.document = JSON.parse(req.body.document);
                }
                if (req.body.image){
                    req.body.image = JSON.parse(req.body.image);
                }
                // console.log(req.body)
                next()
            }
        });
    }
};

module.exports.parseData = (req, res, next) => {
    let keys = Object.keys(req.body);
    for (let key in keys) {
        console.log(req.body[keys[key]])
        if (req.body[keys[key]]) {
            req.body[keys[key]] = JSON.parse(req.body[keys[key]]);
        }
    }
};
