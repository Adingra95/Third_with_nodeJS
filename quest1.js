console.log('Koffi Adingra Francois Brou');
const fs = require('fs');

const _ = require('lodash');

const yargs= require('yargs');

const notes=require('./notes.js');

console.log("Process",process.argv);

console.log("Yagrs",yargs.argv);

var argv = yargs.argv;
var command = argv._[5];
if(command=== 'list')
{
  notes.getAllNotes();
}
else if(command==='read')
{
notes.readNote(argv.name)
}
else if(command==='create')
{
    notes.createNote(argv.name, argv.rollNo, argv.regNo, argv.school,argv.city );
}
else if(command==='remove')
{
   notes.removeNote(argv.name)
}