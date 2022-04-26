
const fs = require ('fs' );//importation of fs library
const _= require ('lodash' );//importation of lodash library
const yargs = require('yargs');//importation of yargs library
const fs= require ('./qu3.js' );//importation of file created

const tOptions ={
    information: 'T of Note',
    other:'m'
};
const bOptions={
   information: 'b of note',
   other:'b'
};
const argv =yargs
//operation to add item
.command('add','Add a new note',{
    title: tOptions,
    body : bOptions
})
.argv;
var command = argv._[0];
if(command ==='add'){
    var note = notes.addNote(argv.title,argv.body);
    if (note){
        console.log('Note created');
    notes.logNote(note);
    }else{console.log('Note title noticed');}
}