import Contact from '@core/entities/Contact'

export interface CreateContactDTO {
  firstName: string
  lastName: string
  phone: string
}

interface ContactRepository {
  getByIds(ids: string[]): Promise<Contact[]>
  findByPhone(phone: string): Promise<Contact | undefined>
  create(data: CreateContactDTO): Promise<Contact>
}

export default ContactRepository
