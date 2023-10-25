const fs = require("fs");

//write file
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("dosya oluşturuldu")
    }
})
//read file
fs.readFile("employees.json",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("okunan veri: ",data)
    }
})
//update file
fs.appendFile("employees.json", ',\n{"name": "Employee 2 Name", "salary": 3000}', "utf-8", (err, data)=>{
    if(err){
        console.lof(err)
    }else{
        console.log("data updated!")
    }
})
//delete file
fs.unlink("employees.json", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("dosya silindi")
    }
})

