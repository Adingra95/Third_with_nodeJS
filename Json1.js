const fs= require('fs');

var book = {
    title : 'NODE Programming', Author : 'Koffi'
};

var bk1 = JSON.stringify(book);
fs.writeFileSync('CAP919.json',bk1);