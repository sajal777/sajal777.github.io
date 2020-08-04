var fs = require('fs');

/*fs.writeFile('MyExtraFile.txt','This is from Fs nodejs',function(err) {
    if(err) throw err;
    console.log('File Created');
})*/

/* fs.appendFile('MyExtraFile.txt',`${Math.floor(Math.random() * (100 - 1))}Waaohh amazing`,(err) => {
    if(err) throw err;
    console.log('File Appended');
}) */

/* fs.readFile('Extra1db.json','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data);
}) */

/* fs.rename('MyExtraFile','NewName',(err) => {
    if(err) throw err;
    console.log('File rename');
}) */

fs.unlink('NewName',(err) => {
    if(err) throw err;
    console.log('File deleted');
})


 