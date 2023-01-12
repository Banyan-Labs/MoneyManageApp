

const config = require('../config/auth.config');
const CreateUser = require('../models/user.model');
const User = CreateUser.user;

var bcrypt = require('bcryptjs');



module.exports = {
   
    checkDuplicateEmail: async (req, res, next) => {
       try {
        let emailRequest = await User.findOne({
            where: {
                email: req.body.email
            }
            });
            if (emailRequest) {
                return res.status(400).send({
                    message: "Error! Email is already on an account"
                }) 
            } else {
                CreateUser.create(req.body)
                .then(
                (data) => res.json(data)),
                err => console.error(''),
                CreateUser.save().then(res => console.log("User Created", res))
                .catch((err) => console.log(err));
            } 

            next();
        }
       catch{
        (err) => console.log(err)
       }

    },

};





// const user = new User({
//     firstName: req.body.fname,
//     lastName: req.body.lname,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8),
//     confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8)
// });

// user.save((err,user) => {
//     if (err) {
//         res.status(500).send({message: err});
//         return;
//     }
// })