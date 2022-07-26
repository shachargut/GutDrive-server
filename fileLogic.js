const fs = require("fs")

function saveFile(file){
    fs.writeFileSync("./root/" + file.originalname, file.buffer);
}
function createFolder(folderName){
    let pathForFolder = folderName.replaceAll(" ","/")
    if(fs.existsSync(pathForFolder)){throw{message:"cant create exist folder"}}
    fs.mkdirSync(pathForFolder)
    
}
//createFolder("root/josh2/test8")

function createFile(fileName){
    if(fs.existsSync(`root/${fileName}.txt`)){throw{message:"you cant create exist file"}}
    fs.writeFileSync(`root/${fileName}.txt`,"")
    // fs.writeFileSync(`root/${fileName}.json`, JSON.stringify({error:"some error"}))
}

function readFile(fileName){
    if(!fs.existsSync(`root/${fileName}.txt`)){throw{message:"you cant read unexist file"}}
    const text = fs.readFileSync(`root/${fileName}.txt`, {encoding: "utf-8"})
    console.log(text);
    return text;
    
}

function readFolder(folderName){
    console.log("e");
    data = {files:[],folder:[]}
    let folder = fs.readdirSync(folderName)
    for (i of folder){
        if(fs.statSync('root/'+i).isDirectory()){
            data.folder.push(i)
        }else{
            data.files.push(i)
        }
    }
    //console.log(data);
    return data;
}

// function getFiles (dir, files_){
//     files_ = files_ || [];
//     var files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }

function updateFile(fileName,value){
    if(!fs.existsSync(`root/${fileName}.txt`)){throw{message:"you cant update unexist file"}}
    if(!value){throw{message:"no value to update"}}
    fs.appendFileSync(`root/${fileName}.txt`,`\n  ${value}`)

}

function deleteFile(fileName){
    
    console.log("yossefff");
   //if(!fs.existsSync(`root/${fileName}`)){throw{message:"you cant delete unexist file"}}
    let res = fs.unlinkSync(`root/${fileName}`)
    console.log("asdfadsf"+res);
}

function deleteFolder(folderName){
    if(!fs.existsSync(`root/${folderName}`)){throw{message:"you cant delete unexist folder"}}
    fs.rmdirSync(`root/${folderName}`)
}

// deleteFolder("testt")

//  readFolder("root")
//deleteFile("test1")
module.exports = {createFile,readFile,updateFile,deleteFile,createFolder,saveFile,readFolder}