const fs = require("fs");
const parse = require("csv-parse");

module.exports.saveUploadedFile = async (req, res) => {
  //If error in uploads
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  //save uploaded file in uploads folder
  const policyFile = req.files.policyFile;
  const uploadsFolderPath = __dirname + "/../../UPLOADS";
  fs.mkdir(uploadsFolderPath, (err) => {
    if (err) return res.status(400).send(err);
  });

  const uploadsFilePath = uploadsFolderPath + "/" + policyFile.name;
  policyFile.mv(uploadsFilePath, function (err) {
    if (err) return res.status(400).send(err);
  });

  return uploadsFilePath;
};
