var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ActionSchema = new Schema({
    //user: { type: Schema.Types.ObjectId, ref: 'User' },
    value: Number,
    message: String
})

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var Action = mongoose.model('Action', new Schema(
//     {
//         // username: String,
//         user: { type: Schema.Types.ObjectId, ref: 'User' },
//         value: Number,
//         message: String
//     }
// ));


// const User = mongoose.model('User', UserSchema, 'users');

// module.exports = Action;