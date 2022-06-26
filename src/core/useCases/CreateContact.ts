import ContactRepository from '@core/repositories/ContactRepository'

interface CreateContactDTO {
  firstName: string
  lastName: string
  phone: string
}

class CreateContact {
  constructor(private contactRepository: ContactRepository) {}

  async execute(data: CreateContactDTO) {
    const phoneAlreadyUsed = await this.contactRepository.findByPhone(
      data.phone
    )

    if (phoneAlreadyUsed) throw new Error('phone is already used')

    const contact = await this.contactRepository.create(data)

    return contact
  }
}

export default CreateContact
