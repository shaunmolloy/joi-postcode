import JoiPostcode from '../postcode';

describe('postcode', () => {
  const schema = JoiPostcode.string();

  it('should pass when postcode is valid', () => {
    const { error } = schema.validate('SW1A 2AA');
    expect(error).toEqual(undefined);
  });

  it('should fail when postcode is invalid', () => {
    const valid = schema.validate('SW1A');
    const [ error ] = valid.error.details;
    expect(error.type).toEqual('postcode.invalid');
    expect(error.message).toEqual('Invalid postcode');
  });
});
