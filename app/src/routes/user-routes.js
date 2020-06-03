const passport = require('passport');
const UserController = require('../controllers/user-controller')

module.exports = app => {
    app.route('/usuario')
        .post((req, res) => {
            UserController.registerUser(req, res)
        });
        
    app.route('/usuario/:id')
        .get(passport.authenticate('bearer', {session:false}), (req, res) => { 
           UserController.getUser(req, res) 
        })
        .patch(passport.authenticate('bearer', {session:false}), (req, res) => { 
           UserController.alterUser(req, res) 
        });           

    app.post('/login', 
        passport.authenticate('local', { session: false }), 
        (req, res) => {             
            UserController.login(req, res)
        }
    );
}