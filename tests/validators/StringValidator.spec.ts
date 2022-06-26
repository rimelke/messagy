import StringValidator from '@core/validation/validators/StringValidator'

test('should validate a string', () => {
  const validator = new StringValidator()

  expect(validator.validate('test')).toBe('test')
  expect(() => validator.validate(0)).toThrow('value must be a string')
})

test('should trim a string', () => {
  const validator = new StringValidator().trim()

  expect(validator.validate('   test   ')).toBe('test')
})

test('should validate a min length string', () => {
  const validator = new StringValidator().min(4)

  expect(validator.validate('test')).toBe('test')
  expect(() => validator.validate('tes')).toThrow(
    'value must be at least 4 characters long'
  )
})

test('should validate a regex', () => {
  const validator = new StringValidator().regex(/^test/)

  expect(validator.validate('test')).toBe('test')
  expect(() => validator.validate('wrong test')).toThrow(
    'value must match /^test/'
  )
})
