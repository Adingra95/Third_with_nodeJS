var createNote=(name,rollNo,regNo, school,city)=>{
    console.log("Note Created", name,rollNo,regNo, school,city);
}

var getAllNotes = () =>
{
    console.log('get all notes');
}

var readNote =(name) =>
{
    console.log("Reading Note" ,name);
}

var removeNote =(name)=>
{
    console.log("Removing Note" ,name);
 
}
module.exports={
    createNote,
    getAllNotes,
    readNote,
    removeNote
}