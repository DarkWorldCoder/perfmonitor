const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Machine = new Schema({
    macA:String,
    cpuLoad:Number,
    freeMem:Number,
    totalMem:Number,
    memUsage:Number,
    osType:String,
    cpuModel:String,
    upTime:Number,
    usedMem:Number,
    cpuSpeed:Number,
    numCores:Number,
   

})

module.exports = mongoose.model("Machine",Machine)