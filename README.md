# Joi Postcode

![npm version](https://img.shields.io/npm/v/@shaunmolloy/joi-postcode)

Joi postcode extension using [ideal-postcodes/postcode](https://github.com/ideal-postcodes/postcode).

### Install

```sh
npm i @shaunmolloy/joi-postcode
```

### Basic usage

```js
import JoiPostcode from 'joi-postcode';

const schema = JoiPostcode.string();
schema.validate('SW1A 2AA');
```

### License

MIT
