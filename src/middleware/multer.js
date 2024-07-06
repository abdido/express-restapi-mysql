const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets/img')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime()
        const fileName = file.originalname
        cb(null, `${timestamp}${fileName}`)
    }
})

const upload = multer(
    {
        storage: storage,
        limits : {
            fileSize: 3 * 1000 * 1000
        },
        
        fileFilter: (req, file, cb) => {
            const acceptableExtensions = ['.png', '.jpg'];
            if (!(acceptableExtensions.includes(path.extname(file.originalname)))) {
            return cb(new Error("Masukkan file foto .png / .jpg"));
            }
    
            // added this
            const fileSize = parseInt(req.headers['content-length']);
            if (fileSize > 1048576) {
            return cb(new Error('Maksimal file 1MB'));
            }
            // --
    
    
            cb(null, true);
        }
        })

module.exports = upload