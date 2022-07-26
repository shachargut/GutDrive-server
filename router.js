const express = require('express'), router = express.Router();
const multer = require("multer"), upload = multer();
const fileLogic = require("./fileLogic")

router.post("/upload",upload.single('fileName'),async(req,res)=>{
    console.log(req.file);
    try{
        fileLogic.saveFile(req.file)
        res.send(`create ${req.file.originalname}`)
    }
    catch{
        res.send("error");
    }
})

router.post("/folderfind",async(req,res)=>{
    try{
        console.log(req.body);
        const data = await fileLogic.readFolder(req.body.folderName)
        res.send(data)
    }
    catch(err){

    }
})

router.post("/folder", async(req,res)=>{
    try{
        console.log("im here");
        await fileLogic.createFolder(req.body.folderName)
        console.log("folder create****************",req.body.folderName);
        res.send(`create ${req.body.folderName} as a new folder`)
        
    }
    catch{
        res.send(err.massage)
    }
})
router.post("/folderp/:folderName", async(req,res)=>{
    try{
        console.log(req.params['folderName']);
        await fileLogic.createFolder(req.params['folderName'])
        //console.log("folder create****************",req.body.folderName);
        res.send(`create ${req.body.folderName} as a new folder`)
        
    }
    catch{
        res.send(err.massage)
    }
})

router.get("/file",async(req,res)=>{
    try{
        const data = await fileLogic.readFile(req.body.fileName) 
        console.log(data);
        res.send(data)
    }
    catch(err){
        res.send(err.message)
    }
})

router.post("/file", async(req,res)=>{
    try{
        await fileLogic.createFile(req.body.fileName)
        res.send(`create ${req.body.fileName} as a new file`)
    }
    catch{
        res.send(err.massage)
    }
})


router.put("/file",async(req,res)=>{
    try{
        await fileLogic.updateFile(req.body.fileName,req.body.value)
        res.send("update done successfully")
    }
    catch(err){
        res.send(err.message)
    }
})

router.delete("/file/:fileName", async(req,res)=>{
    try{
        console.log("**yossef**");
        console.log(req.params['fileName']);
        await fileLogic.deleteFile(req.params['fileName'])
        res.send("delete")
    }
    catch(err){
        console.log(err);
        res.send(err.massage)
    }
})
router.delete("/folder/:folderName", async(req,res)=>{
    try{
        console.log("**yossef**");
        console.log(req.params['fileName']);
        await fileLogic.deleteFile(req.params['fileName'])
        res.send("delete")
    }
    catch(err){
        console.log(err);
        res.send(err.massage)
    }
})


module.exports = router