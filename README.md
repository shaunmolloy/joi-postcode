# Joi Postcode

![npm version](https://img.shields.io/npm/v/@shaunmolloy/joi-postcode)

Validate postcodes with this Joi postcode extension.  
Using [ideal-postcodes/postcode](https://github.com/ideal-postcodes/postcode) behind the scenes.

### Install

```sh
npm i @shaunmolloy/joi-postcode
```

### Basic usage

```js
import JoiPostcode from '@shaunmolloy/joi-postcode';

const schema = JoiPostcode.string();
schema.validate('SW1A 2AA');
```

### License

MIT
