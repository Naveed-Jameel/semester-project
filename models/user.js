var mongoose=require("mongoose");

var UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    }
});

const User=mongoose.model("User",UserSchema);
module.exports=User;