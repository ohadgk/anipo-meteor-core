
interface Event {
  _id?: string
  name: string
  organization: string //id of Organization
  masters: Array<string> //[id of Meteor.User id that contains ref to Master]
  participants: Array<string> //[id of Meteor.User id that contains ref to Participant]
  attendances: Array<string> // [id of Attandance]
  activeAttandance?: string// id of Attandance

  creationDate: Date
}