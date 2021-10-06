//the purpose of this prroject is  to exract information from cricinfo 
//and present in form of excel and scorecard
//the real purpose is to learn howto  extract information
//and get experience with javascript
//a very good reason to ever make a project
let minimist=require("minimist");
let axios=require("axios");
let jsdom=require("jsdom");
let excel4node=require("excel4node");
let pdf=require("pdf-lib");
let args=minimist(process.argv);
console.log(args);
//download using axios
// read using jsdom
//make eexcel  using excel4node
//make pdf using pdf-lib
let response=axios.get(args.source);
response.then(function (response) {
       let html=response.data;
       let dom=new jsdom.JSDOM(html);
       var document= dom.window.document;
       let matchinfo=document.querySelectorAll(div.matchinfo)
       console.log(matchinfo.length);
       console.log(html);

} )
.catch(function (error) {
  console.log(error);
})


