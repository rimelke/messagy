import ArrayValidator from '@core/validation/validators/ArrayValidator'
import ObjectValidator from '@core/validation/validators/ObjectValidator'
import StringValidator from '@core/validation/validators/StringValidator'
import Contact from './Contact'

interface GroupDTO {
  id: string
  name: string
  contacts: Contact[]
}

class Group {
  id: string
  name: string
  contacts: Contact[]

  constructor(data: GroupDTO) {
    const validator = new ObjectValidator().match({
      id: new StringValidator().required(),
      name: new StringValidator().trim().required(),
      contacts: new ArrayValidator()
        .items(new ObjectValidator().instance(Contact))
        .required()
    })

    const value = validator.validate(data)

    this.id = value.id
    this.contacts = value.contacts
    this.name = value.name
  }
}

export default Group
