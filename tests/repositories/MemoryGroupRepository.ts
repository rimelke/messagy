import Group from '@core/entities/Group'
import GroupRepository, {
  CreateGroupDTO
} from '@core/repositories/GroupRepository'
import genId from '@tests/utils/genId'

class MemoryGroupRepository implements GroupRepository {
  groups: Group[] = []

  async create(data: CreateGroupDTO) {
    const group = new Group({
      id: genId(),
      contacts: data.contacts,
      name: data.name
    })

    this.groups.push(group)

    return group
  }
}

export default MemoryGroupRepository
