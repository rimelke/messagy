import Contact from '@core/entities/Contact'
import Group from '@core/entities/Group'

export interface CreateGroupDTO {
  name: string
  contacts: Contact[]
}

interface GroupRepository {
  create(data: CreateGroupDTO): Promise<Group>
}

export default GroupRepository
