// with yargs
const data = require("yargs");
const value = data.argv;
username="Koffi";
pwd="1245";
if(value._[0]==username && value._[1]==pwd)
{
    console.log("login Sucessfully");
}
   else{
       console.log("login denied");
   }
