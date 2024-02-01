const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

const mobValidator = (req, res, next) => {
    const errors = [];
    if (req.body.name === '') {
        errors.push('This Mob needs a name!')
    } 
    if (req.body.about === '') {
        errors.push('This Mob need an about description!')
    } 
    if (req.body.image === '') {
        errors.push('This Mob needs an image!')
    }
    console.log(errors)
    req.errors = errors;
    next()
};

const playerValidator = (req, res, next) => {
    const errors = [];
    if (req.body.userName === '') {
        errors.push('You must provide a userName!')
    } 
    if (req.body.email === '') {
        errors.push('You must provide an email!')
    } 
    if (req.body.password === '') {
        errors.push('You must provide a password!')
    }
    if (req.body.confirmPassword === '') {
        errors.push('You must provide a  confirmed password!')
    }
    if (req.body.password != req.body.confirmPassword) {
        errors.push('Your password and confirmed password must match!')
    }
    console.log(errors)
    req.errors = errors;
    next()
};

const authorize = (req, res, next) => {
    if (req.session.player) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = { asyncHandler, mobValidator, playerValidator, authorize };