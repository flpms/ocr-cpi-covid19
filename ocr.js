const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "por",
  oem: 1,
  psm: 3,
};

const images = [
  "./example-doc/DocumentoRecebidoCPIPANDEMIA1Carta04052021145626969RECIBOCOD2894-0.png",
  "./example-doc/DocumentoRecebidoCPIPANDEMIA1Carta04052021145626969RECIBOCOD2894-1.png",
  "./example-doc/DocumentoRecebidoCPIPANDEMIA1Carta04052021145626969RECIBOCOD2894-2.png",
];

tesseract
  .recognize(images, config)
  .then((text) => {
    console.log("Result:", text);

    
  })
  .catch((error) => {
    console.log(error.message);
  });