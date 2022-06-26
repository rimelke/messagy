import ContactRepository from '@core/repositories/ContactRepository'
import GroupRepository from '@core/repositories/GroupRepository'

interface CreateGroupDTO {
  name: string
  contactIds?: string[]
}

class CreateGroup {
  constructor(
    private contactRepository: ContactRepository,
    private groupRepository: GroupRepository
  ) {}

  async execute(data: CreateGroupDTO) {
    const contacts = data.contactIds
      ? await this.contactRepository.getByIds(data.contactIds)
      : []

    if (data.contactIds && contacts.length !== data.contactIds.length)
      throw new Error('invalid contactIds')

    const group = await this.groupRepository.create({
      name: data.name,
      contacts
    })

    return group
  }
}

export default CreateGroup
