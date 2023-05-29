import { Model } from 'pinia-orm'

export default class UserForm extends Model {
  static entity = 'userformvalues'
  static fields () {
    return {
      id: this.uid(),
      name: this.string(),
      value: this.string(),
      // firstName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() }, 
      // lastName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() },
      // email: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() },
      // button: { type: this.string(), value: this.string(), action: this.string()}
    }
  }
}