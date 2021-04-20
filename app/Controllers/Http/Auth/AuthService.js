'use strict'
const AuthValidator = use('./AuthValidator')
const AuthQuery = use('./AuthQuery')
class AuthService {
    constructor(){
      this.authValidator = new AuthValidator()
      this.authQuery = new AuthQuery()
    }
    async createUser(data,response, auth){
        const validation = await this.authValidator.validateUserData(data)
        if (validation.fails()) {
          return response.status(401).send(validation.messages())
        }
        let username = data.firstName +'_'+data.lastName
        let totalUsers = await this.authQuery.countUserFieldByKey('username', username)
        let newCount = totalUsers > 0 ? ++totalUsers : ''
        if(newCount > 0){
            username = username+'_'+ newCount
        }

        const user =  await this.authQuery.createUser({
            firstName : data.firstName,
            lastName : data.lastName,
            password: data.password,
            email : data.email,
            gender : data.gender,
            username : username
        })

        await auth.login(user)
        return {
          msg : 'Your account has been created successfully!'
        }

    }
    async login(data, response, auth){
      const validation = await this.authValidator.validateLoginData(data)
      if (validation.fails()) {
        return response.status(401).send(validation.messages())
      }
      try {
        const user = await auth.attempt(data.email, data.password)
        return user
       } catch (error) {
        return error
     }
    }


}

module.exports = AuthService
