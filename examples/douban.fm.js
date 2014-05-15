var teabowl = require('../index');

teabowl('turingou/douban.fm', function(err, result){
  if (err) return console.log(err);
  console.log(result);
})