const multer = require("multer");
//uplode treiner

const userstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        // cb(
        //   null,
        //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
        // );
        cb(null, Date.now() + '_' + file.originalname)
    },
});

const filefilter = (req, file, cb) => {
    // if(file.mimetype === 'video/mp4' || file.mimetype === 'video/mkv'){
    //     cb(null,true);
    // }else{
    //     cb(null,false);
    // }
    if (!file.originalname.match(/\.(mp4|webp|MPEG-4|mkv|mov|png|jpg|jpeg|pdf|doc|docx)$/)) {
        return cb(new Error("Please upload a image"));
    }
    cb(undefined, true);
};


//trainer user document

const UsersImg = multer({
    storage: userstorage,
    limits: { fieldSize: 25 * 1024 * 1024 },
    // fileFilter: filefilter,
});



module.exports = { UsersImg };