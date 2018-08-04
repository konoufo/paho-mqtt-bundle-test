import MQTT from 'paho-mqtt'

const location = {hostname: 'localhost', port: 15675};
const client = new MQTT.Client(location.hostname, Number(location.port), '/ws',
    "clientId" + Math.floor(Math.random() * Math.floor(45))
);
/*let message = new MQTT.Message("Hello");
message.destinationName = "World";
client.send(message);*/
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
 
// connect the client
client.connect({
    userName: 'guest',
    password: 'guest',
    onSuccess: onConnect,
    onFailure
});
 
 
// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  let message = new MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

function onFailure() {
    console.log('connection fails');
}
 
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}
 
// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}
