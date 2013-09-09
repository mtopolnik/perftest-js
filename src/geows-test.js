function logResult(r) {
   spy('Response: {}', r.stringBody());
}

function conf(b) {
   format = java.lang.String.format;
   base = 'http://10.150.4.25:27071';
}

function init() { 
   spy(/.*g/.test('aoeug'));
}

function test() {
   req.acceptableStatus('ok');
   req('suggest-street').get(spy('suggest URL', url(base).s('geows','suggest','street') 
         .q('zip','10000', 'place','zagreb', 'street','Heinzelo')))
         .go(logResult);
//   req('validation-invalid').get(spy('validation URL', url(base).s('geows','validation')
//         .q('zip','10000', 'place','zagb', 'street','Hein', 'number','47', 'subn','b')))
//         .go(logResult);
//   req('validation-place').get(spy('validation URL', url(base).s('geows','validation')
//         .q('zip','10000', 'place','zagreb', 'street','Hein', 'number','47', 'subn','b')))
//         .go(logResult);
//   req('validation-street').get(spy('validation URL', url(base).s('geows','validation')
//         .q('zip','10000', 'place','zagreb', 'street','Heinzelova', 'number','11', 'subn','b')))
//         .go(logResult);
//   req('validation-success').get(spy('validation URL', url(base).s('geows','validation')
//         .q('zip','10000', 'place','zagreb', 'street','Heinzelova', 'number','47', 'subn','b')))
//         .go(function(r) {
//            logResult(r);
//            req('delivery-zones').get(spy('dz URL {}', url(base).s(
//                  'p5/address', r.jsonBody().id.toFixed(), 'delivery-zones')
//               )).go(logResult);
//         });
}
