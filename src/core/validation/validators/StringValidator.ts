import { Validator } from '..'

class StringValidator extends Validator {
  constructor() {
    super()
    this.validators.push({
      priority: 10,
      validator: (value) => ({
        isValid: typeof value === 'string',
        newValue: value,
        errorMessage: 'value must be a string'
      })
    })
  }

  trim() {
    this.validators.push({
      priority: 20,
      validator: (value: string) => ({
        isValid: true,
        newValue: value.trim()
      })
    })

    return this
  }

  min(minLength: number) {
    this.validators.push({
      priority: 20,
      validator: (value: string) => ({
        isValid: value.length >= minLength,
        newValue: value,
        errorMessage: `value must be at least ${minLength} characters long`
      })
    })

    return this
  }

  regex(schema: RegExp) {
    this.validators.push({
      priority: 20,
      validator: (value: string) => ({
        isValid: schema.test(value),
        newValue: value,
        errorMessage: `value must match ${schema}`
      })
    })

    return this
  }
}

export default StringValidator
