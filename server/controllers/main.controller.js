var User = require("../models/user");
var Action = require("../models/action");
var mainController = {};

mainController.createProduct = (req, res) => {
    addToDB(req, res);
};

mainController.getAllUsersWithActions = (req, res) => {
    User.find().populate('actions').exec((err, users) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(users);
    });
};

mainController.addOrUpdateUserWithActions = (req, res) => {
    var promiseList = [];
    req.body.forEach(user => {
        var newPromise = User.findOne({ username: user.username }).exec();
        promiseList.push(newPromise);
        newPromise.then(async (userDB) => {
            //user exists
            if (userDB) {
                await addNewActionsIntoExistingUser(user, userDB);
            }
            //new user
            else {
                await creatNewUserWithActions(user, userDB);
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
        // promiseList.push(newPromise);
    });
    var allPromises = Promise.all(promiseList);
    allPromises.then(() => {
        res.status(200).json();
    }).catch((err) => {
        res.status(500).json(err);
    });
}

async function addToDB(req, res) {
    var product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image,
    });

    try {
        doc = await product.save();
        return res.status(201).json(doc);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

async function creatNewUserWithActions(user, userDB) {
    try {
        userDB = new User({
            username: user.username
        });
        user.actions.forEach((action) => {
            userDB.actions.push(new Action({
                value: action.value,
                message: action.message
            }));
        });
        await Action.insertMany(userDB.actions);
        await userDB.save();
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

async function addNewActionsIntoExistingUser(user, userDB) {
    try {
        let actionsToAdd = new Array();
        user.actions.forEach((action) => {
            let newAction = new Action({
                value: action.value,
                message: action.message
            });
            actionsToAdd.push(newAction);
        });
        
        await Action.insertMany(actionsToAdd);
        userDB.actions.push(...actionsToAdd);
        await userDB.save();
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
module.exports = mainController;