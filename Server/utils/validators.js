const { body, validationResult } = require("express-validator");

const createUserRequestValidation = [
  body("firstName", "First Name should be greater than 3 letters").isLength({
    min: 3,
  }),
  body("email", "Invalid email format").isEmail(),
  body("phoneNumber", "Invalid Phone Number, include country code too.").custom((value, { req }) => {
    const regex =
      /^\s*(?:\+(\d{1,3}))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$/gm;
      const match = regex.exec(value);
    if (match) {
      return true;
    } else {
      return false;
    }
  }),
  body("pickupAddress", "Enter Full Pickup address").isLength({ min: 5 }),
  body("dropAddress", "Enter Full Drop address").isLength({ min: 5 }),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { createUserRequestValidation, validate };
