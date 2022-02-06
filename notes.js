fs = require('fs')
const chalk = require('chalk')
const note = function(){
    return 'Hello World'
}

const readNote = function(title){

    const notes = loadNote()
    const read = notes.find(function(note){

        return note.title === title
    })

    if(read){
        console.log(read)
        console.log(chalk.yellow.inverse(read.title))
        console.log(read.body)
}
else{
    console.log('No note found')
}
}

const listNotes = function(){

    const notes = loadNote()
    const iterNote = notes.forEach(function(note){

        console.log(note.title)
    })
}

const removeNote = function(title){
    const notes = loadNote()
    const checkNote = notes.filter(function (note){
        return note.title !== title

    })

    if(notes.length > checkNote.length)
    {
        console.log(chalk.green.inverse('Note removed'))
    } else{
        console.log(chalk.red.inverse('Note not found'))
    }
    saveNotes(checkNote)
}

const addNote = function(title, body){
    const notes = loadNote()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    debugger

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse("New note added"))
    }
    else{
        console.log(chalk.red.inverse("Noote Title taken!"))
    }
    
   
   saveNotes(notes)
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = function() {

    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}
module.exports = {
    note: note,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
