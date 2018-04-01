# mockingJay

> Mock real world data


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
```

#### Note
This library uses [Chance.js](http://chancejs.com/) for data generation, hence all the types supported by it are supported by mockingJay.