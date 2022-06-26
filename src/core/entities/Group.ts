import Contact from './Contact'

interface GroupDTO {
  id: string
  name: string
  contacts: Contact[]
}

class Group {
  id: string
  name: string
  contacts: Contact[]

  constructor(data: GroupDTO) {
    this.id = data.id
    this.contacts = data.contacts
    this.name = data.name
  }
}

export default Group
