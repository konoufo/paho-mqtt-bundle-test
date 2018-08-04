# Paho-MQTT Bundle Test
The purpose of this repo is to have tests to check that `Paho-MQTT` works as expected with bundlers e.g Webpack, Browserify (which is not the case as of now, see issue [paho-mqtt#150](https://github.com/eclipse/paho.mqtt.javascript/issues/150)). The tests suite used is a slightly modified version of the official `Paho-MQTT` tests.

## Setting up
Clone the project and install dependencies:
```
> mkdir paho-mqtt-test && cd paho-mqtt-test
> git clone https://github.com/konoufo/paho-mqtt-bundle-test.git .

> npm i
// if you don't have npx
> npm i npx -g
````
## Run the tests
You need Python 3 to be able to run the local broker.
***Important: You want to replace the `paho-mqtt.js` file in `src` folder with the new release you want to test, if that release doesn't match the one currently available online on the npm registry.***

Start the local broker and run the tests:
```
> runBroker.sh
> runTest.sh
```
If the tests run without throwing errors (namely the infamous `TypeError: Cannot read property length of undefined.`), then we are good.
