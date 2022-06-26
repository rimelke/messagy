import Contact from '@core/entities/Contact'
import CreateGroup from '@core/useCases/CreateGroup'
import MemoryContactRepository from '@tests/repositories/MemoryContactRepository'
import MemoryGroupRepository from '@tests/repositories/MemoryGroupRepository'

test('should create a group', async () => {
  const contactRepository = new MemoryContactRepository()
  const groupRepository = new MemoryGroupRepository()

  contactRepository.contacts = [
    new Contact({
      id: 'contact1',
      firstName: 'Contact',
      lastName: 'One',
      phone: '+00 (00) 000000000'
    }),
    new Contact({
      id: 'contact2',
      firstName: 'Contact',
      lastName: 'Two',
      phone: '+00 (00) 000000001'
    })
  ]

  const createGroup = new CreateGroup(contactRepository, groupRepository)

  const group = await createGroup.execute({
    name: 'test',
    contactIds: ['contact1', 'contact2']
  })

  expect(group).toHaveProperty('id')
  expect(group.contacts.length).toBe(2)
})

test('should create a group without initial contacts list', async () => {
  const contactRepository = new MemoryContactRepository()
  const groupRepository = new MemoryGroupRepository()

  const createGroup = new CreateGroup(contactRepository, groupRepository)

  const group = await createGroup.execute({
    name: 'test'
  })

  expect(group).toHaveProperty('id')
  expect(group.contacts).toBeInstanceOf(Array)
  expect(group.contacts.length).toBe(0)
})

test('should not create a group with invalid contacts', async () => {
  const contactRepository = new MemoryContactRepository()
  const groupRepository = new MemoryGroupRepository()

  const createGroup = new CreateGroup(contactRepository, groupRepository)

  await expect(
    createGroup.execute({
      name: 'test',
      contactIds: ['contact1']
    })
  ).rejects.toThrow('invalid contactIds')
})
