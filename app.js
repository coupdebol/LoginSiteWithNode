var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
asdfasdfasdfa
asdfasdfasdfasd
asdfasdfasdfasdasdf
asdfasdfasdfasdasdfasdf
asdfasdfasdfasdasdfasdf

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '/Users/Debol/Documents/LoginSiteWithNode/apiKey.properties',
  application: 'https://api.stormpath.com/v1/applications/2gPF3bYKY94tEoYMIpmMPL',
  secretKey: 'some_long_random_string',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.use('/profile',stormpath.loginRequired,require('./profile')());
app.listen(3000);


/*

https://stormpath.com/blog/build-nodejs-express-stormpath-app/


*/