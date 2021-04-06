const { Agent } = require("../../models/Agent");
const { UsersAccount } = require("../../models/usersAccount");
const { Category } = require("../../models/lob");
const { Carrier } = require("../../models/carrier");
const { User } = require("../../models/user");
const { Policy } = require("../../models/policy");

const getUserData = (csvData) => {
  const usersData = [];
  let keys = [];
  csvData.forEach((curDataSet, index) => {
    let curObjSet = {};
    if (index === 0) {
      keys.push(curDataSet);
    } else {
      curDataSet.forEach((curData, index) => {
        let curKey = keys[0][index];
        curObjSet[curKey] = curData;
      });
      usersData.push(curObjSet);
    }
  });
  return usersData;
};

module.exports.saveAgents = async (csvData) => {
  const allagents = [];
  csvData.forEach((curData, index) => {
    if (index !== 0) allagents.push(curData[0]);
  });
  const agentNames = [...new Set(allagents)];

  for (let agentName of agentNames) {
    let agent = new Agent({
      agentName: agentName,
    });
    agent = await agent.save();
  }
};

module.exports.saveAccounts = async (csvData) => {
  const allAccounts = [];
  csvData.forEach((curData, index) => {
    if (index !== 0) allAccounts.push(curData[13]);
  });
  const accountNames = [...new Set(allAccounts)];

  for (let accountName of accountNames) {
    let usersAccount = new UsersAccount({
      accountName: accountName,
    });
    usersAccount = await usersAccount.save();
  }
};

module.exports.saveCatergory = async (csvData) => {
  const allCategory = [];
  csvData.forEach((curData, index) => {
    if (index !== 0) allCategory.push(curData[9]);
  });
  const categoryNames = [...new Set(allCategory)];

  for (let categoryName of categoryNames) {
    let category = new Category({
      categoryName: categoryName,
    });
    category = await category.save();
  }
};

module.exports.saveCarriers = async (csvData) => {
  const allCarrier = [];
  csvData.forEach((curData, index) => {
    if (index !== 0) allCarrier.push(curData[8]);
  });
  const companyNames = [...new Set(allCarrier)];

  for (let companyName of companyNames) {
    let carrier = new Carrier({
      companyName: companyName,
    });
    carrier = await carrier.save();
  }
};

module.exports.saveUsers = async (csvData) => {
  const usersData = getUserData(csvData);
  for (let userData of usersData) {
    let user = new User({
      firstName: userData.firstname,
      address: userData.address,
      phoneNumber: userData.phone,
      state: userData.state,
      zipCode: userData.zip,
      email: userData.email,
      gender: userData.gender,
      userType: userData.userType,
    });
    user = await user.save();
  }
};

module.exports.savePolicy = async (csvData) => {
  const usersData = getUserData(csvData);
  for (let userData of usersData) {
    let policy = new Policy({
      policyNumber: userData.policy_number,
      policyStartDate: userData.policy_start_date,
      policyEndDate: userData.policy_end_date,
      policyCategory: userData.category_name,
      collectionId: "",
      companyCollectionId: new Carrier({
        companyName: userData.company_name,
      }),
      userId: new User({
        firstName: userData.firstname,
        address: userData.address,
        phoneNumber: userData.phone,
        state: userData.state,
        zipCode: userData.zip,
        email: userData.email,
        gender: userData.gender,
        userType: userData.userType,
      }),
      premiumAmount: userData.premium_amount,
    });
    policy = await policy.save();
  }
};
