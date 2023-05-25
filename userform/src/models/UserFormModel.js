import { Model } from 'pinia-orm'

export default class UserForm extends Model {
  // entity is a required property for all models.
  static entity = 'userforms'
  // List of all fields (schema) of the post model. `this.string()` declares
  // a string field type with a default value as the first argument.
  // `this.uid()` declares a unique id if none provided.
  static fields () {
    return {
        // userform structure
        // firstName, lastName
      id: this.uid(),
      firstName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() }, 
      lastName: { label: this.string(), type: this.string(), value: this.string(), placeholder: this.string() }, 
    //   name: this.string(''),
    //   email: this.string('')
    }
  }
}