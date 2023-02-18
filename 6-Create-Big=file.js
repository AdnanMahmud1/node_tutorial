const { writeFileSync, existsSync, unlinkSync } = require("fs");

const filePath = "./content/big.txt";

const createFile = () => {
  for (let i = 0; i < 100000; i++) {
    writeFileSync(filePath, `hello world ${i}\n`, { flag: "a" });
  }
};

const checkForFile = () => {
  let stata = existsSync(filePath);
  if (stata) {
    try {
      unlinkSync(filePath);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(`file is ${stata}`);
};

checkForFile();
createFile();
