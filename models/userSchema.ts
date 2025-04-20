import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String
    },
    password:{
        required: true,
        type:String
    }

},{
  timestamps:true
});


const User = mongoose.models.Users || mongoose.model("Users",userSchema)

export default User