const cors = require('cors');
const express = require('express');

const apiServer = express();
apiServer.use(cors({ origin: true }));


apiServer.get('/ping', (request, response) => {
  response.send(
    {'response' : 'pong' }
  );
});

apiServer.get('/prime/:num', (request, response) => {
  try {
    var num = request.params.num
    var result = sumPrimes(num)
    response.send(
      {
        'input': num,
        'result': result
      }
    );
  } catch (error) {
    res.status(500)
    res.render('error', { 'error': error })
  }
});

apiServer.get('/factorial/:num', (request, response) => {
  try {
    var num = request.params.num
    var result = factorial(num)
    response.send(
      {
        'input': num,
        'result': result
      }
    );
  } catch (error) {
    res.status(500)
    res.render('error', { 'error': error })
  }
});

apiServer.get('*', (request, response) => {
  response.send(
    {'status' : 'alive' }
  );
});


apiServer.post('*', (request, response) => {
  response.send(
    'You have sent a POST request - interesting ...'
  );
});



module.exports = {
  /*simpleServer,
  corsServer,*/
  apiServer
};



// Math functions

function sumPrimes(num) {
  var prime = [];
  //This loop references the function 'isPrime'.
  //It passes the 'i' arg to 'isPrime' (which is 2 first time). 
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  //Function takes 2 (i) and checks it. If it passes the for loop (j = 2; if j < num(2)), it doesn't
  //pass this, so it returns false. Then j = 3??? No, J stays at 2 and i(num) becomes 3. Then it continues to fail..? COnfused because the code works. Thought I understood it.
  function isPrime(num) {
    for (var j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  return prime;
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}