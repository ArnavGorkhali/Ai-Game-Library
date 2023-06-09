const multer = require('multer');
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'games')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + file.originalname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });

module.exports = upload;