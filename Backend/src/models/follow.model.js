const mongoose=require("mongoose");

const followSchema= new mongoose.Schema({
    follower:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"users",
        // required:[true,"Follower is required"]
        type:String,
    },
    followee:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"users",
        // required:[true,"Followee is requirede"]
        type:String,
    }
},
    {
        
        timestamps:true
    })

    followSchema.index({follower:1,followee:1},{unique:true})
const followModel= mongoose.model("follows",followSchema)
module.exports=followModel