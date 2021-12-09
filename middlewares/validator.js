const { body, validationResult } = require("express-validator");

exports.validateId = (req, res, next) => {
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        return next();
    } else {
        let err = new Error("Invalid story id");
        err.status = 400;
        return next(err);
    }
};

exports.validateSignUp = [
    body("firstName", "First name is required").notEmpty().trim().escape(),
    body("lastName", "Last name is required").notEmpty().trim().escape(),
    body("email", "Email must be valid")
        .isEmail()
        .trim()
        .escape()
        .normalizeEmail(),
    body("password", "Password must meet length requirements").isLength({
        min: 8,
        max: 64,
    }),
];

exports.validateLogIn = [
    body("email", "Email must be valid")
        .isEmail()
        .trim()
        .escape()
        .normalizeEmail(),
    body("password", "Password must meet length requirements").isLength({
        min: 8,
        max: 64,
    }),
];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach((error) => {
            req.flash("error", error.msg);
        });
        return res.redirect("back");
    } else {
        return next();
    }
};
