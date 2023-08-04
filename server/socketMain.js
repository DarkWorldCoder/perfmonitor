const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/perfData")

const Machine = require("./models/Machine")
function socketMain(io,socket){
    let macA;

    socket.on("clientAuth",async(key)=>{
        if(key === "dasfasdfwer3434"){
            // valid nodeClient
            socket.join("clients")
        }else if(key === "sdfasdfasdf"){
            // valid ui client has joined
            socket.join("ui")
            console.log("A react client has joined")
            const docs = await Machine.find({})
            if(docs){
                docs.forEach((machine)=>{
                    machine.isActive= false
                    io.to("ui").emit("data",machine)
                })
            }
            socket.on("disconnect",()=>{
                console.log("React client disconnected")
            })
        }else{
            // an invalid client has joined. Goodbye
            socket.disconnect(true)
        }
    })

   socket.on("disconnect",async()=>{
       const docs = await Machine.find({macA:macA})
       if(docs.length>0){
        docs[0].isActive = false
        io.to("ui").emit("data",docs[0])
       }
   })


    socket.on("initPerfData", async(data)=>{
        macA = data.macA 
        const mongooseResponse = await checkAndAdd(data)
        
    })

    socket.on("perfData",(data)=>{
        
        io.to("ui").emit("data",data)
    })
}

function checkAndAdd(data){

    return new Promise(async(resolve,reject)=>{
       try{
           const isMachienPresent =  await Machine.findOne({macA:data.macA})
           if(isMachienPresent){
            resolve("Found")
           }else{
            const newMachine = new Machine(data)
            await newMachine.save()
            resolve("Added")
           }
       }
       catch(err){
        throw err
        reject(err)
       }
       })
    
}
module.exports = socketMain