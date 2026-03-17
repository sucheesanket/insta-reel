const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"useername already exists"],
        required:[true,"your username is required"]
    },
    email:{
        type:String,
        unique:[true,"email is already exists"],
        required:[true,"your email is required"]
    },
    password:{
        type:String,
        required:[true,"your password is required"]

    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/sucheesanket/username-icon-png-6-255353659.jpg?updatedAt=1771293680801"
    }
})
const userModel= mongoose.model("users",userSchema);
module.exports=userModel;