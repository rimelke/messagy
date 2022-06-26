import Contact from '@core/entities/Contact'
import ContactRepository from '@core/repositories/ContactRepository'

class MemoryContactRepository implements ContactRepository {
  contacts: Contact[] = []

  async getByIds(ids: string[]) {
    return this.contacts.filter((contact) => ids.includes(contact.id))
  }
}

export default MemoryContactRepository
