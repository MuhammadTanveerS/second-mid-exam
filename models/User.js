const { default: mongoose, mongo } = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('User',UserSchema);

