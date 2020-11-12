const Joi = require("joi");

const BookSchema = Joi.object({
  title: Joi.string().required().min(2).max(20),
  author: Joi.string().required().min(4).max(30),
  genre: Joi.string().required().min(4).max(8),
  yearPublished: Joi.date().required(),
  price: Joi.number().required(),
});

module.exports = BookSchema;
