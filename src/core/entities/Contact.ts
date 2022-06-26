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
    this.id = data.id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.phone = data.phone
  }
}

export default Contact
