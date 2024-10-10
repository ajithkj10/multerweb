const express = require("express")
const { renderhome, addname } = require("../controllers/control")
const path = require("path")
const multer = require("multer")
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

router.get("/", renderhome)
router.post("/add", upload.single("file"), addname)

module.exports=router;