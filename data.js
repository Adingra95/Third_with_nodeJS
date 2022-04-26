const fs = require('fs');

var addData = (regn, rno) => {
    var data =[];
    var data_item = { regn, rno}; //2 obj

     try{
         var dataString = fs.readFileSync('json_data.json');
         data = JSON.parse(dataString); //parse converte string to obj
     }
      catch (e){}
      var duplicatedata = data.filter((data_item)=> data_item.regn===regn);
      if (duplicatedata.length===0)
      {
          data.push(data_item);
          fs.writeFileSync('json_data.json', JSON.stringify(data));
      }
};
module.exports ={addData};
