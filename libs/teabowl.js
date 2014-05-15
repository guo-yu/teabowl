var url = require('url');
var request = require('request');
var cheerio = require('cheerio');
var host = 'https://github.com/';

module.exports = Teabowl;

function Teabowl(repo, done) {
  if (!repo || !done) return false;
  if (repo.indexOf('/') === -1) return done(new Error('both GitHub username and repository name required'));
  // var infomation = repo.split('/');
  // var username = infomation[0];
  // var reponame = infomation[1];
  // console.log(username);
  // console.log(reponame);
  var projectMainPage = url.resolve(host, repo);
  console.log(projectMainPage);
  request.get(projectMainPage, function(err, res, body){
    console.log(err);
    console.log(res.statusCode);
    if (err) return done(err);
    if (res.statusCode !== 200) return done(new Error(res.statusCode), res);
    console.log(body);
    var $ = cheerio.load(body);
    var stats = {};
    stats.watch = $('div.pagehead .pagehead-actions li:eq(0) a.social-count').text();
    console.log(stats);
    return;
  })
}