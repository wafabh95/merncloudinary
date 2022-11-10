const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userauthSchema = new Schema({
    fname:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String}
   
});
module.exports = mongoose.model("Userauth",userauthSchema);