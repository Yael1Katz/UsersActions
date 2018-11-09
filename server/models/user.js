var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    username: String,
    actions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }]
})


const User = mongoose.model('User', UserSchema);
module.exports = User;




// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     id: String,
//     username: String,
//     actions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }]
// })
// const ActionSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User' },
//     value: Number,
//     message: String
// })
// const Action = mongoose.model('Action', ActionSchema);
// const User = mongoose.model('User', UserSchema);
// module.exports = {
//     User, Action,
// }







// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// const UserSchema = mongoose.model('User', new Schema(
//     {
//         id: String,
//         username: String,
//         actions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }]
//     }
// ));

// const ActionSchema = mongoose.model('Action', new Schema(
//     {
//         // username: String,
//         user: { type: Schema.Types.ObjectId, ref: 'User' },
//         value: Number,
//         message: String
//     }
// ));

// const User = mongoose.model('User', UserSchema, 'users');
// const Action = mongoose.model('Action', ActionSchema, 'actions');
// //module.exports = User;

// module.exports = {
//     User, Action,
//   }