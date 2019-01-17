console.log("Hello!")

var Particle = require('particle-api-js');
var particle = new Particle();
var token;

// order of function execution
init();
//getDevice();

function init(){
particle.login({username: 'accountname', password: 'password'}).then(
  function(data) {
    token = data.body.access_token;
    console.log('API call completed on promise resolve: ', data.body.access_token);
        token = data.body.access_token;

  // get device
    var devicesPr = particle.listDevices({ auth: token });

    devicesPr.then(
      function(devices){
        console.log('Devices: ', devices);
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );

    // invoke function
    var fnPr = particle.callFunction({ deviceId: '37001d000751373238323937', 
    name: 'ctrlled', argument: ',HIGH', auth: token });

    fnPr.then(
    function(data) {
      console.log('Function called succesfully:', data);
    }, function(err) {
      console.log('An error occurred:', err);
    });
      },
      function (err) {
        console.log('Could not log in.', err);
      }
    );
}

function getDevice(){
  console.log('current token is', token);

}




