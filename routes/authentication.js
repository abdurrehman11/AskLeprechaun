
const models = require("../Models");    // Models
const User = models.user;   // accessing user model definition file
const validator = require("../Validators/validators");
const jwt = require('jsonwebtoken');
const secret = require('crypto').randomBytes(256).toString('hex');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const express = require('express');
const router = express.Router();

var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'leprechaunfyp@gmail.com',
            pass: 'batch2014'
        }
    });

// function test(a, b = '') {
//     console.log('first = ' + a + ' second = ' + b);
//     console.log('hey it works!');
// }

// send email to user 
function sendEmail(email, username, temporarytoken, linkName) {
    var emailText;
    if(linkName === 'activate') {
        emailText = 'Hello<strong> ' + username + '</strong>,<br><br>Thank you for registering at localhost.com. Please click on the link below to complete your activation:<br><br><a href="http://localhost:4200/' + linkName + '/'+ temporarytoken + '">http://localhost:4200/activate/</a>';
    } else if(linkName === 'activateUser') {
        emailText = 'Hello<strong> ' + username + '</strong>,<br><br>Your account has been successfully activated!';
    } else if(linkName === 'resend') {
        emailText = 'Hello<strong> ' + username + '</strong>,<br><br>You recently requested a new account activation link. Please click on the link below to complete your activation:<br><br><a href="http://localhost:4200/activate/' + temporarytoken + '">http://localhost:4200/activate/</a>';
    } else if(linkName === 'resendUsername') {
        emailText = 'Hello ,<br><br>You recently requested your username. Your username: ' + username;
    } else if(linkName === 'changePassword') {
        emailText = 'Hello<strong> ' + username + '</strong>,<br><br>You recently request a password reset link. Please click on the link below to reset your password:<br><br><a href="http://localhost:4200/' + linkName + '/' + temporarytoken + '">http://localhost:4200/reset/</a>';
    } else if(linkName === 'savepassword') {
        emailText = 'Hello<strong> ' + username + '</strong>,<br><br>This e-mail is to notify you that your password was recently reset at localhost.com';
    }

    //console.log('send email');
    // Create e-mail object to send to user
    var email = {
        from: 'leprechaunfyp@gmail.com',
        to: email,
        subject: 'Localhost Username Request',
        //text: 'Hello, You recently requested your username. Please save it: ' + user.dataValues.username,
        html: emailText
    };
    
    console.log('in function ');

    // Node function to send email to user
    transporter.sendMail(email, function(err, info) {
        if (err) { 
            console.log('Could not sent email to user: ' + err)    // If error in sending e-mail, log to console/terminal
        } else {
            console.log('success' + info);
            //res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' });
        }
    });
}

module.exports.construct = () => {

    // Start Sendgrid Configuration Settings	
	// var options = {
	// 	auth: {
	// 		api_user: 'themeanstack', // Sendgrid username
	// 		api_key: 'PAssword123!@#' // Sendgrid password
	// 	}
	// }
    //var mailer = nodemailer.createTransport(sgTransport(options));
    // End Sendgrid Configuration Settings  

    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'leprechaunfyp@gmail.com',
    //         pass: 'batch2014'
    //     }
    // });

    /* ==============
     Register Route
  ============== */

    router.post('/register', (req, res) => {

        // form fields
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        // check email validity
        var emailValidityMsg = validator.checkEmailFormat(email);
        if(emailValidityMsg) {
            res.json({ success: false, message: emailValidityMsg});
        } else {
            // check email already exists
             validator.checkEmailExists(email).then((result) => {
                 res.json({ success: false, message: result});
                }).catch((err) => {
                    // check username validity
                    var usernameValidityMsg = validator.checkUserNameFormat(username);
                    if(usernameValidityMsg) { 
                        res.json({ success: false, message: usernameValidityMsg});
                    } else {
                        // check username already exists
                        validator.checkUserNameExists(username).then((result) => {
                            res.json({ success: false, message: result});
                        }).catch((err) => {
                            // check password validity
                            var passwordValidityMsg = validator.checkPasswordFormat(password);
                            if(passwordValidityMsg) {
                                res.json({ success: false, message: passwordValidityMsg});
                            } else {
                                const temporarytoken = jwt.sign({ username: username, email: email }, secret, { expiresIn: '24h' });
                                // now instantiate an object
                                const user = User.build({
                                    email: req.body.email.toLowerCase(),
                                    username: req.body.username.toLowerCase(),
                                    password: req.body.password,
                                    temporarytoken: temporarytoken
                                });

                                console.log('\nToken = ' + temporarytoken + '\n');

                                 // save user in database
                                 user.save().then((user) => {
                                    //console.log('here 1');
                                    var email = user.dataValues.email;
                                    var username = user.dataValues.username;
                                    var temporarytoken = user.dataValues.temporarytoken;
                                    var linkName = 'activate';

                                    // send email to user for activation link
                                    sendEmail(email, username, temporarytoken, linkName);
                                    
                                    console.log('here 2');
                                    res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' });
                                    }).catch((err) => {
                                        if(err) {
                                            res.json({ success: false, message: 'Could not save user!' });
                                        }
                                    });

                                }
                            });
                        }
                    });
                }
            });

    /* ====================================== 
     Route to activate the user's account
  ====================================== */  
    
    router.put('/activate/:token', (req, res) => {
        User.findOne({
            where: { temporarytoken: req.params.token }
        }).then(user => {
            if(!user) {
                res.json({ success: false, message: 'No user found for activation' });  // Token may be valid but does not match any user in the database
            } else {
                if(user.dataValues.block) {
                    res.json({ success: false, message: 'Can not activate account. You have been blocked by the admin' });
                } else {
                     var email = user.dataValues.email;
                    var username = user.dataValues.username;
                    var temporarytoken = user.dataValues.temporarytoken;
                    var linkName = 'activateUser';

                    var token = req.params.token;   // Save the token from URL for verification
                    // Function to verify the user's token
                    jwt.verify(token, secret, (err, decoded) => {
                        if(err) {
                            res.json({ success: false, message: 'Activation link has expired.' }); // Token is expired
                        } else {
                            user.temporarytoken = false; // Remove temporary token once activated
                            user.active = true;      // Change account status to Activated
                            // save user in database
                            user.save({ fields: ['temporarytoken', 'active']}).then(() => {
                                res.json({ success: true, message: 'Account activated!' });
                                // send email to user for successful activation
                                //sendEmail(email, username, temporarytoken, linkName);
                            }).catch((err) => {
                                res.json({ success: false, message: 'Unable to activate user in database.' });
                            })
                        }
                    });
                }
            }
        }).catch((err) => {
            res.json({ success: false, message: err });
        });
    });


    /* ==============================================================================================================
      // Route to verify user credentials and send user a new activation link once credentials have been verified        
  ============================================================================================================ */

    router.put('/resend', (req, res) => {
        if(!req.body.username) {
            res.json({ success: false, message: 'Username was not provided.' });
        } else {
            if(!req.body.password) {
                res.json({ success: false, message: 'Password was not provided.' });
            } else {
                User.findOne({ where: { username: req.body.username }
                }).then(user => {
                    if(!user) {
                        res.json({ success: false, message: 'User not found.' });
                    } else {
                        var email = user.dataValues.email;
                        var username = user.dataValues.username;
                        var temporarytoken = user.dataValues.temporarytoken;
                        var linkName = 'resend';

                        var validPassword = User.comparePassword(req.body.password, user.dataValues.password);
                        if(!validPassword) {
                            res.json({ success: false, message: 'Incorrect password' });
                        } else {
                            if(user.dataValues.block) {
                                res.json({ success: false, message: 'Can not resend activation link. You have been blocked by the admin' });
                            } else {
                                if(user.dataValues.active) {
                                    res.json({ success: false, message: 'Account is already activated.' });
                                } else {
                                    var token = jwt.sign({ username: req.body.username, email: req.body.email }, secret, { expiresIn: '24h' });
                                    user.temporarytoken = token;
                                    console.log(token);
                                    user.save({ fields: ['temporarytoken']}).then(() => {
                                        res.json({ success: true, message: 'Resend the activation link to your email: '+ user.dataValues.email });
                                        // send email to user for  re-activation link
                                        sendEmail(email, username, token, linkName);
                                    }).catch((err) => {
                                        res.json({ success: false, message: true });
                                    })
                                    }
                                }
                        }
                    }
                })
            }
        }
    });

    
    /* ============================================================
     Route to check if user's email is available for registration
  ============================================================ */

    router.get('/checkEmail/:email', (req, res) => {
        if(!req.params.email) {
            res.json({ success: false, message: 'Email was not provided' });
        } else {
            console.log(req.params.email);
            User.findOne({ where: { email: req.params.email }
        }).then(user => {
            if(user) {
                res.json({ success: false, message: 'Email is already taken' });
            } else {
                res.json({ success: true, message: 'Email is available' });
            }
        }).catch((err) => {
            res.json({ success: false, message: err });
        });
    }
});

/* ===============================================================
     Route to check if user's username is available for registration
  =============================================================== */

router.get('/checkUsername/:username', (req, res) => {
        if(!req.params.username) {
            res.json({ success: false, message: 'Username was not provided' });
        } else {
            User.findOne({ where: { username: req.params.username }
        }).then(user => {
            if(user) {
                res.json({ success: false, message: 'Username is already taken' });
            } else {
                res.json({ success: true, message: 'Username is available' });
            }
        }).catch((err) => {
            res.json({ success: false, message: err });
        });
    }
});

/* ==========
  LOGIN ROUTE
========= */

    router.post('/login', (req, res) => {
        if(!req.body.username) {
            res.json({ success: false, message: 'No username was provided' });
        } else {
            if(!req.body.password) {
                res.json({ success: false, message: 'No password was provided' });
            } else {
                User.findOne({ where: {username: req.body.username.toLowerCase() }
            }).then(user => {
                if(!user) {
                    res.json({ success: false, message: 'Username not found' });
                } else {
                    var validPassword = User.comparePassword(req.body.password, user.dataValues.password);
                    if(!validPassword) {
                        res.json({ success: false, message: 'Incorrect password' });
                    } else { 
                        if(!user.dataValues.active) {
                            res.json({ success: false, message: 'Account is not yet activated. Please check your e-mail for activation link.', expired: true });
                        } else {
                            if(user.dataValues.block) {
                                res.json({ success: false, message: 'Can not login. You have been blocked by admin' });
                            } else {
                                 // create token for user login  
                                const token = jwt.sign({ userId: user.dataValues.id }, secret, { expiresIn: '24h' });
                                res.json({ 
                                    success: true,
                                    message: 'Successful login!',
                                    token: token,
                                    user: { username: user.dataValues.username,
                                            email: user.dataValues.email }
                                });
                            }
                           
                        }
                        
                    }
                }
            }).catch((err) => {
                console.log('in catch');
                res.json({ success: false, message: err });
            });
        }
    }
});

    /* ========================================
     Route to send user's username to e-mail
  ======================================= */

  router.post('/resetUsername', (req, res) => {
      if(!req.body.email) {
            res.json({ success: false, message: 'Email was not provided' });
        } else {
            User.findOne({ where: { email: req.body.email }
        }).then(user => {
            if(!user) {
                res.json({ success: false, message: 'Email not found' });
            } else {
                var email = user.dataValues.email;
                var username = user.dataValues.username;
                var temporarytoken = user.dataValues.temporarytoken;
                var linkName = 'resendUsername';

                res.json({ success: true, message: 'Username has been sent to e-mail! ', username: user.dataValues.username });
                // send email to user for successful activation
                sendEmail(email, username, temporarytoken, linkName);
            }
        }).catch((err) => {
            res.json({ success: false, message: err });
        });
      }
  });


    /* ==============================================
     Route to send reset password link to the user
  ============================================= */

  router.put('/resetPassword', (req, res) => {
      if(!req.body.email) {
          res.json({ success: false, message: 'Email not provided' });
      } else {
          User.findOne({ where: { email: req.body.email }
        }).then(user => {
            if(!user) {
                res.json({ success: false, message: 'User not found' });
            } else {
                if(!user.dataValues.active) {
                    res.json({ success: false, message: 'Account has not yet been activated' });
                } else {
                    var token = jwt.sign({ username: req.body.username, email: req.body.email }, secret, { expiresIn: '24h' });
                    user.resettoken = token;

                    var email = user.dataValues.email;
                    var username = user.dataValues.username;
                    var temporarytoken = token;
                    var linkName = 'changePassword';

                    console.log('\nToken: ' + token + '\n');
                    user.save({ fields: ['resettoken'] }).then(() => {
                        res.json({ success: true, message: 'Please check your e-mail for password reset link' });
                        // send email to user for  re-activation link
                        sendEmail(email, username, temporarytoken, linkName);
                    }).catch((err) => {
                        res.json({ success: false, message: err });
                    });
                }
            }
          }).catch((err) => {
              res.json({ success: false, message: err });
          });
      }
  });


    /* ==============================================
     Route to verify user's e-mail activation link
  ============================================= */

    router.get('/resetPassword/:token', (req, res) => {
        User.findOne({ where: { resettoken: req.params.token }
        }).then(user => {
            if(!user) {
                res.json({ success: false, message: 'Password link has expired' }); // Token is valid but not no user has that token anymore
            } else {
                var token = req.params.token;
                // Function to verify token
                jwt.verify(token, secret, (err, decoded) => {
                    if(err) {
                        res.json({ success: false, message: 'Password link has expired' });
                    } else {
                        res.json({ success: true, user: user, message: 'You can change password' });
                    }
                });
            }
        }).catch((err) => {
            res.json({ success: false, message: err });
        })
    });


    /* ==============================================
     Route to Save user's new password to database
  ============================================= */

    router.put('/savepassword', (req, res) => {
        if(!req.body.username) {
            res.json({ success: false, message: 'Username not provided' });
        } else {
            if(req.body.password == null || req.body.password == '') {
                res.json({ success: false, message: 'Password not provided' });
            } else {
                 User.findOne({ where: { username: req.body.username }
                }).then(user => {
                    if(!user) {
                        res.json({ success: false, message: 'User not found' });
                    } else {
                        var email = user.dataValues.email;
                        var username = user.dataValues.username;
                        var temporarytoken = user.dataValues.temporarytoken;
                        var linkName = 'savepassword';

                        // check password validity
                        var passwordValidityMsg = validator.checkPasswordFormat(req.body.password);
                        if(passwordValidityMsg) {
                            res.json({ success: false, message: passwordValidityMsg});
                        } else {
                            validator.encryptPassword(req.body.password).then((hash) => {
                                // encrypt password
                                user.password = hash;
                                // update password in database
                                user.save({ fields: ['password'] }).then(() => {
                                    res.json({ success: true, message: 'Password changed successfully.' });
                                    // send email to user for  re-activation link
                                    //sendEmail(email, username, temporarytoken, linkName);
                                }).catch((err) => {
                                    console.log('here 2');
                                    res.json({ success: false, message: 'Failed: ' + err });
                                });

                            }).catch((errr) => {
                                console.log(err);    
                            });
                        }
                    }
                }).catch((err) => {
                    res.json({ success: false, message: err });
                });
            }  
        }
    });


    // =========  Middleware to grab the headers  =================
    // any request with attached header coming from Angular2 meet this middleware
    // any routes come after this middleware will run this middleware
    // router.use((req, res, next) => {
        
    // });

    var isloggedIn = (req,res,next) => {
        const token = req.headers['authorization'];
        if(!token) {
            res.json({ success: false, message: 'No token was provided' });
        } else {
            jwt.verify(token, secret, (err, decoded) => {
                if(err) {
                    // check if token has expired
                    res.json({ success: false, message: 'Token invalid' + err });
                } else {
                    // req.decoded will be global
                    req.decoded = decoded;
                    next();
                }
            });
        }
    }

    /* ==============
     Profile Route
  ============== */

  router.get('/profile',isloggedIn, (req, res) => {
      User.findOne({ attributes: ['username', 'email'], where: { id: req.decoded.userId }
    }).then(user => {
        if(!user) {
            res.json({ success: false, message: 'User not found' });
        } else {
            //console.log(user.dataValues);
            res.json({ success: true, user: user.dataValues });
        }
    }).catch(err => {
        res.json({ success: false, message: err });
    });
  });
            
        
}
module.exports.router = router;