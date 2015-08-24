// Create a moongoose DB
var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/gamrdb');

// // Review model
// var ReviewSchema = new mongoose.Schema({
//   content: {
//     type: String, 
//     default: ""
//   },
//   created_at: { type: Date },
//   updated_at: { type: Date }
// });

// Game Model
var GameSchema = new mongoose.Schema({
  id_api: {
    type: Number
  },
  name : {
    type : String
  }
});

// Member model
var UserSchema = new mongoose.Schema({
  // first_name: {
  //   type: String,
  //   default: ''
  // },
  // last_name: {
  //   type: String,
  //   default: ''
  // },
  username: {
    type: String, 
    unique: true, 
    default: ''
  },
  // email: {
  //   type: String,
  //   unique: true, 
  //   default: ''
  // },
  password: {
    type: String,
    unique: true,
    default: ''
  },
  games: [GameSchema]
  // platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Platform' }]
});

// Create var for the modules
// var Review = mongoose.model("Review", ReviewSchema);
// var Platform = mongoose.model("Platform", PlatformSchema);
var Game = mongoose.model("Game", GameSchema);
var User = mongoose.model("User", UserSchema);

// Export the modules
// module.exports.Review = Review;
// module.exports.Platform = Platform;
module.exports.Game = Game;
module.exports.User = User;
console.log('schema created');