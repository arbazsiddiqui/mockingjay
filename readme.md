# mockingJay

> Mock real world data. Could be used as a single key/value or an array.


## Install

```
$ npm i mock-jay
```


## Usage

```js
const mockingJay = require('mock-jay');


const person = {
	name : mockingJay("name"),
	age : mockingJay("age"),
	address : mockingJay("address")
}
//=> { name: 'Helen Drake', age: 31, address: '1869 Obpo Way' }

//array usage
const web = {
	ips : mockingJay(["ip", 5])
}
/*{ ips: 
        [ '186.48.247.180',
          '98.26.2.117',
          '68.149.95.82',
          '44.181.84.87',
          '101.132.104.177' ] } */
```

#### Note
This library uses [Chance.js](http://chancejs.com/) for data generation, hence all the types supported by it are supported by mockingJay.