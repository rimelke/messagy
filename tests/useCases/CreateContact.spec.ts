import Contact from '@core/entities/Contact'
import CreateContact from '@core/useCases/CreateContact'
import MemoryContactRepository from '@tests/repositories/MemoryContactRepository'

test('should create a contact', async () => {
  const contactRepository = new MemoryContactRepository()

  const createContact = new CreateContact(contactRepository)

  const contact = await createContact.execute({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+00 00 00000-0000'
  })

  expect(contact).toHaveProperty('id')
})

test('should not create a contact if phone is already used', async () => {
  const contactRepository = new MemoryContactRepository()

  const createContact = new CreateContact(contactRepository)

  contactRepository.contacts = [
    new Contact({
      id: '0',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+00 00 00000-0000'
    })
  ]

  await expect(
    createContact.execute({
      firstName: 'John',
      lastName: 'Doe',
      phone: '+00 00 00000-0000'
    })
  ).rejects.toThrow('phone is already used')
})
