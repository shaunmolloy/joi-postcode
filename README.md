# Joi Postcode

Joi postcode extension using [ideal-postcodes/postcode](https://github.com/ideal-postcodes/postcode).

### Basic usage

```js
import JoiPostcode from 'joi-postcode';

const schema = JoiPostcode.string();
schema.validate('SW1A 2AA');
```
