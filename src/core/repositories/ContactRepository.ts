import Contact from '@core/entities/Contact'

interface ContactRepository {
  getByIds(ids: string[]): Promise<Contact[]>
}

export default ContactRepository
