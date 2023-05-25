import { Model } from 'pinia-orm'

export default class UserForm extends Model {
  static entity = 'userforms'
  static fields () {
    return {
      id: this.uid(),
      firstName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() }, 
      lastName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() },
      email: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() },
      button: { type: this.string(), value: this.string(), action: this.string()}
    }
  }
}