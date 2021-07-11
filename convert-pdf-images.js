const { spawn } = require('child_process');

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("File location with filename:\n", function (filename) {
  const isPDFRegexp = /^.*\.pdf$/gi;
  const pdfRegexp = /\.pdf$/gi;

  if (!isPDFRegexp.test(filename)) {
    console.error('\ninvalid filename');
    return process.exit(1);
  }

  const _flname = filename.replace(pdfRegexp, '');

  const convert = spawn('convert', ['-density', '300', filename, `${_flname}.png`]);

  console.log('Convertendo...');

  convert.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  convert.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  convert.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    process.exit(0);
  });
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});