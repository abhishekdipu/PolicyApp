const Joi = require("joi");
const { Message } = require("../models/message");
const _ = require("lodash");
const schedule = require("node-schedule");

module.exports.saveMessageAtGivenTimeStamp = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const timeStamp = new Date(req.body.timeStamp);
  let message = new Message(_.pick(req.body, ["message", "timeStamp"]));

  //schedule a job to save message at given timeStamp
  schedule.scheduleJob(timeStamp, async () => {
    message = await message.save();
  });

  res.send({
    message: req.body.message,
    jobScheduleAt: req.body.timeStamp,
  });
};

const validate = (requestBody) => {
  const schema = Joi.object({
    message: Joi.string().required().max(2000),
    timeStamp: Joi.date().iso().greater("now").required(),
  });

  return schema.validate(requestBody);
};
