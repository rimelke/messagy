import { Validator } from '..'

class ArrayValidator extends Validator {
  constructor() {
    super()
    this.validators.push({
      priority: 10,
      validator: (value) => ({
        isValid: value instanceof Array,
        newValue: value,
        errorMessage: 'value must be an array'
      })
    })
  }

  items(validator: Validator) {
    this.validators.push({
      priority: 20,
      validator: (value: Array<any>) => ({
        isValid: value.every((item) => validator.validate(item)),
        newValue: value,
        errorMessage: 'fon'
      })
    })

    return this
  }
}

export default ArrayValidator
