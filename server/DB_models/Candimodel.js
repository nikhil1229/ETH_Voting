// Step 3 - this is the code for ./models.js
 
var mongoose = require('mongoose');
 
var CandiSchema = new mongoose.Schema({
    Fname:String,
    Lname:String,
    Party:String,
    Aadhar:String,
    Mobile:String,
    
    
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('CandiImage', CandiSchema);