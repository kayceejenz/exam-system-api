const { throws } = require("assert");
const fs = require("fs");
const path = require("path");
const CustomError = require("./custom-error");

class FileSystem{
    async Exists(path){
        return fs.existsSync(path);
    }

    async CreateDir(path){
        if(await !this.Exists(path)){
            fs.mkdir(path,{recursive: true},(err)=>{
                if(err){
                    throw new CustomError(err,500);
                }
                console.log(`path : ${path} created.`)
            })
        }
    }

    async copyFile(filePath, destPath){
        if(this.Exists(filePath)){
            fs.rename(filePath,destPath,(err)=>{
                if(err){
                    throw new CustomError(err,500);
                }
                console.log(`file from : ${filePath} copied to destination path: ${destPath}.`)
            })
        }
    }

    async moveFile(filePath, destPath){
        if(this.Exists(filePath)){
            fs.rename(filePath,destPath,(err)=>{
                if(err){
                    throw new CustomError(err,500);
                }

                this.deleteFile(filePath);
                console.log(`file from : ${filePath} moved to destination path: ${destPath}.`)
            })
        }
    }


    async deleteFile(filePath){
        fs.unlink(path,(err)=>{
            if(err){
                throw new CustomError(err,500);
            }
            console.log(`file path : ${filePath} deleted.`)
        })
    }
}

module.exports = new FileSystem();