const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username:{
        type:String,
        unique: [true, 'Username already exist']
    },
    email:{
        type: String,
        unique: [true, 'Email address already in use']
    },
    password:{
        type: String,
    },
    verifyPassword:{
        type:String,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type:String,
    },
    birthDay:{
        type: Number   
    },
    country:{
        type: String
    }
});


userSchema.pre("save", async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    this.verifyPassword = await bcrypt.hash(this.verifyPassword, 10);
    next();
});


userSchema.methods.validatePassword = async function(passwordOfUser){
    return await bcrypt.compare(passwordOfUser, this.password);
};


module.exports = model('User', userSchema);
