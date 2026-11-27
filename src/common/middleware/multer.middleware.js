import multer from "multer";
import crypto from "crypto";
import path from "path";


const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err)
      cb(null, file.fieldname + '-' + raw.toString('hex'))
    })
    const ext = path.extname(file.originalname)
    cb(null,file.filename+ "-"+ uniqueSuffix + ext)
  }
})

const fileFilter = (req, file, cb)=>{

  const allowed = ["image/jpg","image/jpeg","application/pdf","image/webp","image/gif"]
  if(allowed.includes(file.mimetype)){
    cb(null,true)
    console.log(req.file)
  }else{
    cb(new Error("file type not supported"),false)
  }
}


export const upload = multer({
    storage,
    limits:{fileSize:5*1024*1024},
    fileFilter:fileFilter
})  