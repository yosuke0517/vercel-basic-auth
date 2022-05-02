const protect = require('static-auth');
const safeCompare = require('safe-compare');

/*
 *
 */

const app = protect(
  '/admin',
  (username, password) => safeCompare(username, process.env.USER_NAME) && safeCompare(password, process.env.PASSWORD),
  {
    directory: __dirname + '/public',
    realm: 'vercel-basic-auth.node-static-auth',
    onAuthFailed: res => {
      res.end('Restricted area, please login (admin:admin).');
    }
  }
);

module.exports = app;
