# LoginSiteNode
A simple template for a website on which users need to create an account

## Installation
In the file `app.js` enter the current location of the `apikey.properties` file

`npm install -g nodemon` to install the command to start the project

`npm install` should install all the required dependencies

`nodemon app.js` will start the server and restart it for any file changes

[localhost:3000](http://localhost:3000) to visit the site

## For reference
HTML is produced with [Jade](http://jade-lang.com/)

Web framework uses [Express](http://expressjs.com/)

User authentication is done thanks to [Stormpath](https://github.com/stormpath/stormpath-express)

[Forms](https://github.com/caolan/forms) validates forms

[Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) protection is added with [Csurf](https://github.com/expressjs/csurf)

[Xtend](https://www.npmjs.com/package/xtend) is a utility library that makes it easy to copy properties from one JavaScript object to another.