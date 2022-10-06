const fs = require("fs"); // import module fs, needed for handling files and directories

// define current path
const logsPath = __dirname + "/Logs";

// check if directory "Logs" exists on the current directory
if (!fs.existsSync(logsPath)) {
    // create directory "Logs"
    console.log("Creating Logs directory as it does not exist.");
    fs.mkdirSync(logsPath);
} else {
  // remove all the files from the Logs directory
  console.log("Logs directory already exists. Removing all files from it.");
  fs.readdirSync("Logs").forEach(file => {
    console.log("Deleting File: " + file);
    fs.unlinkSync(`Logs/${file}`);
  });
}

// change the current process to the new Logs directory
process.chdir("Logs");

// create 10 log files and write some text into the file
for (let i = 0; i < 10; i++) {
    // create a new file
    console.log('Creating File: ' + `log${i}.txt`);
    fs.writeFileSync(`log${i}.txt`, `This is log file number ${i}`);
}

console.log("\nExecution completed successfully.\n");