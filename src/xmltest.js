function init() {
   test();
}

function test() {
   var base = 'http://localhost:8080';
   req('get1').get(url(base).s('g')).go(function(r) {
      req('post').post(r.stringBody()).body(
            spy('Posting xml {}', xml('root').el('child').textel('txt', 'g'))
      ).go(function(r) {
         req('get2').get(
               url(base).s(xpath('/root/child/txt/text()').evaluate(spy("post response {}",r.xmlBody()))[0])
         ).go();
      })
   });
}
