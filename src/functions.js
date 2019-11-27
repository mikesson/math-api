const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Express Servers
const { /*simpleServer, corsServer,*/ apiServer} = require('./server');

// HTTP Cloud Functions
//const simple = functions.https.onRequest(simpleServer);
//const cors = functions.https.onRequest(corsServer);

const api = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}`; // Prepend '/' to keep query params if any
  }

  return apiServer(request, response);
});

module.exports = {
  /*simple,
  cors,*/
  api
};

