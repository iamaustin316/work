const fs = require("fs");

const writeFile = async (data, fileName) => {
  fs.writeFileSync(fileName, data)
}

(async () => {
    await writeFile("ABC", "test.txt");
})();