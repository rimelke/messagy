import ObjectValidator from '@core/validation/validators/ObjectValidator'
import StringValidator from '@core/validation/validators/StringValidator'

interface ContactDTO {
  id: string
  firstName: string
  lastName: string
  phone: string
}

class Contact {
  id: string
  firstName: string
  lastName: string
  phone: string

  constructor(data: ContactDTO) {
    const validator = new ObjectValidator().match({
      id: new StringValidator().required(),
      firstName: new StringValidator().trim().required(),
      lastName: new StringValidator().trim().required(),
      phone: new StringValidator()
        .trim()
        .regex(/^\+\d{2}\s\(\d{2}\)\s\d{8}\d?$/)
        .required()
    })

    const value = validator.validate(data)

    this.id = value.id
    this.firstName = value.firstName
    this.lastName = value.lastName
    this.phone = value.phone
  }
}

export default Contact
