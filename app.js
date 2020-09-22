const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add comand
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove comand
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list comand
yargs.command({
  command: "list",
  describe: "List notes",

  handler() {
    notes.listNotes();
  },
});

// Create read comand
yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "Note title to be read",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

console.log(yargs.argv);

// console.log(chalk.red.bold.inverse('Success!'));

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('adding note');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

// console.log(yargs.argv);
