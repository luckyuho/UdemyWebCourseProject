const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    role: Joi.string().required().valid("student", "instructor"),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

const courseValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    price: Joi.number().min(10).required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.courseValidation = courseValidation;
