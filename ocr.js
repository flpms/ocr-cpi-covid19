const tesseract = require("node-tesseract-ocr");
const ocrFileList = require('./ocr-filelist.json');

const config = {
  lang: "por",
  oem: 1,
  psm: 3,
};

tesseract
  .recognize(ocrFileList.files, config)
  .then((text) => {
    console.log("Result:", text);


  })
  .catch((error) => {
    console.log(error.message);
  });