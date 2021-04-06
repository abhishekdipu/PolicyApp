const fs = require("fs");
const parse = require("csv-parse");
const {
  saveAgents,
  saveAccounts,
  saveCatergory,
  saveCarriers,
  saveUsers,
  savePolicy,
} = require("./savedata");
const { saveUploadedFile } = require("./handleCSV");

module.exports.uploadPolicyFile = async (req, res) => {
  //save uploaded csv file
  const uploadsFilePath = await saveUploadedFile(req, res);

  //read and parse uploaded csv
  let csvData = [];
  fs.createReadStream(uploadsFilePath)
    .pipe(parse({ delimiter: "," }))
    .on("data", (dataRow) => {
      csvData.push(dataRow);
    })
    .on("end", () => {
      //Save data to collecition
      saveAgents(csvData);
      saveAccounts(csvData);
      saveCatergory(csvData);
      saveCarriers(csvData);
      saveUsers(csvData);
      savePolicy(csvData);
    });

  res.send("File uploaded!");
};
