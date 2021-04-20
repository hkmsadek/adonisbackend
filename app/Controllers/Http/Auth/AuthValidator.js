const { validateAll } = use('Validator')
class AuthValidator {

    registerUserRules(){
      return {
        email: 'required|email|unique:users,email',
        password: 'required|min:6',
        firstName : 'required',
        lastName : 'required',
        gender : 'required',
      }
    }
    ruleMessage(){
        return {
          'firstName.required': 'Firstname is requied',
          'lastName.required': 'Lastname is requied',
          'gender.required': 'Gender is requied',
          'password.required': 'Password is requied',
          'password.min': 'Password must be at least 6 charecters long.',
          'email.required': 'Enter a valid email address.',
          'email.unique': 'This email is already in use, please a choose different one.',
        }
    }
    async validateUserData(data){
      return validateAll(data, this.registerUserRules(), this.ruleMessage())
    }

    async validateLoginData(data){
      return validateAll(data, {
        email: 'required|email',
        password: 'required|min:6',
      })
    }




}

module.exports = AuthValidator
