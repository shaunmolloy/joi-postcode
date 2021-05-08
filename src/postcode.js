import Joi from 'joi';
import { isValid as isPostcodeValid } from 'postcode';

export default Joi.extend((joi) => {
  return {
    type: 'string',
    base: joi.string(),

    validate(value, helpers) {
      if (!isPostcodeValid(value)) {
        return { value, errors: helpers.error('postcode.invalid') };
      }
      return { value };
    },

    messages: { 'postcode.invalid': 'Invalid postcode' },
  };
});
