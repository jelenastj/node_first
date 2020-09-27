const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yargs version
yargs.version('1.0.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demaindOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demaindOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Body:', argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('Listing notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})
//add, remove, read, list


yargs.parse()
//console.log(yargs.argv);


