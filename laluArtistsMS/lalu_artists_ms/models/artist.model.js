const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artist_name : {
        type: String , 
        required : true 
    },
    artist_biography : {
        type : String,
        requrie : true
    },
    artist_followers : {
        type : Number
    },
    artist_albums :{
        type : [mongoose.ObjectId]
    },
    artist_songs : {
        type : [mongoose.ObjectId]
    },
    artist_contact_information:{
        type : [String]
    },
    artist_photo:{
        type: String
    }
},{
    timestamps : true
});

module.exports = mongoose.model('artist',artistSchema);