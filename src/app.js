import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./modules/auth/auth.routes.js";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads');
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + uniqueSuffix + ext);
//   }
// });

// //  const storage = multer.memoryStorage()


// const upload = multer({
//     storage,
//     limits:{
//     fileSize:1024*1024*2 //2mb
// }}); 

// fileFilter:(req,file,cb)=>{
//     const allowed = ["image/png","image/jpeg","apllication/pdf"]
//     if(allowed.includes(file.mimetype)){
//         cb(null,true)
//     }else{
//         cb(new Error("file type not sipported"),false)
//     }
// }

// app.post("/upload",upload.array("files"),(req,res)=>{
//     console.log(req.files);

//     ApiResponse.ok(res,"File uploaded")
// })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads');
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + uniqueSuffix + ext);
//   }
// });
 

// const upload = multer({storage,limits:{
//     fileSize:102*1024*2 //2mb
// }});

// filerFilter:(req,res,cb)=>{
//     const allowed = ["image/png","image/jpeg","application/pdf"]

//     if(allowed.includes(file.mimetype)){
//         cb(null,true)
//     }
//     else{
//         cb(new Error("file type not supported"),false)
//     }
// }


// app.post("/upload",upload.array("filse"),(req,res)=>{
//     console.log(req.files)

//     ApiResponse.ok(res,"file uploaded")
// })
//             OR

// app.post("/upload",(req,res,next)=>{
//     upload.single("file")(req,res,(err)=>{
//         if(err?.code === "LIMIT_FILE_SIZE"){
//             return res.send("file too large")
//         }
//         res.send("upload")
//     })
// })


//  const storage = multer.memoryStorage()


app.use("/api/auth", authRoute);

export default app;
