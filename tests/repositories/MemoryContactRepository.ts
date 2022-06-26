import Contact from '@core/entities/Contact'
import ContactRepository, {
  CreateContactDTO
} from '@core/repositories/ContactRepository'
import genId from '@tests/utils/genId'

class MemoryContactRepository implements ContactRepository {
  contacts: Contact[] = []

  async getByIds(ids: string[]) {
    return this.contacts.filter((contact) => ids.includes(contact.id))
  }

  async findByPhone(phone: string) {
    return this.contacts.find((contact) => contact.phone === phone)
  }

  async create(data: CreateContactDTO) {
    const contact = new Contact({
      id: genId(),
      ...data
    })

    this.contacts.push(contact)

    return contact
  }
}

export default MemoryContactRepository
