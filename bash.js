
const commands = require("./commands.js")

process.stdout.write('promt > ');

process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  commands.evaluateCmd(userInput);
});
