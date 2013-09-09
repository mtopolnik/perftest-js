require('global.js');


function init() {
   test();
}

function test() {
   req('example').get("http://www.siemens.de").go(spy);
//   req('siemens.com').get("http://www.siemens.com").go(spy);
}
