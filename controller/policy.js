const _ = require("lodash");
const { Policy } = require("../models/policy");

//to get policy by username (first_name)
module.exports.getPolicyByUsername = async (req, res) => {
  let policy = await Policy.findOne({ "userId.firstName": req.params.user });
  if (!policy) return res.status(404).send("User not founf");

  policy = _.pick(policy, [
    "policyNumber",
    "policyStartDate",
    "policyEndDate",
    "policyCategory",
  ]);
  res.send(policy);
};

//to get policy for all users
module.exports.getAggrigatePolicyForAllUsers = async (req, res) => {
  const pipeline = [
    {
      $group: {
        _id: "$userId.firstName",
        policyNumbers: { $push: "$policyNumber" },
        policyCategories: { $push: "$policyCategory" },
        totalPremiumAmount: { $sum: "$premiumAmount" },
      },
    },

    {
      $project: {
        _id: 0,
        userName: "$_id",
        policyNumbers: 1,
        totalPremiumAmount: 1,
        policyCategories: 1,
      },
    },
    {
      $sort: {
        userName: 1,
      },
    },
  ];
  let data = await Policy.aggregate(pipeline);

  res.send(data);
};
