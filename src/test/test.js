var fs = require('fs')

var logMessagesStr = fs.readFileSync(__dirname + '/test_fixtire.log', 'utf8')
//var xmlStr = iconvlite.decode(xmlBuffer, 'win1251');
//console.log(logMessagesStr)

logMessages = logMessagesStr.split('\n');

console.log(logMessages.length)



logMessages.forEach(line => {
  
});

fn(logMessages[0])

function fn( line) {
  var spaceIndex1 = line.indexOf(' ')
  var pid = line.substr(0, spaceIndex)

  "".index

  var spaceIndex2 = line.indexOf(' ', )
  var thid = line.substr(0, spaceIndex2)
  console.log(pid)
}

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});