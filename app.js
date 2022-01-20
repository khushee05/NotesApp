const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { describe, demandOption } = require('yargs')
const notes = require('./notes')
// const addresult = require('./utils')
// const sum = addresult(3,5)
// console.log(sum)

// const res = require('./notes')
// const output = res()
// console.log(output)

// console.log(chalk.inverse.green('Success!!'))
// console.log(validator.isURL('course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview'))

// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note')
// }
// else{
//     console.log("Khushee")
// }

// //Customize yargs version

yargs.version('1.1.0')

// //adding note

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:
        {
            describe: 'Body of Titled note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
        // console.log('Title: ',argv.title)
        // console.log('Body: ',argv.body)
    }



})

// //removing note

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
        //console.log('Removing a note')
    }
})

// //listing note
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        notes.listNotes()
        //console.log('Listing all the notes')
    }
})

// //reading note

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        //console.log('Reading a note')
        notes.readNote(argv.title)
    }
})


//console.log(yargs.argv)

yargs.parse()