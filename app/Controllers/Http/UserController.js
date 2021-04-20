'use strict'
const User = use('App/Models/User')
class UserController {
   async user({request, response, params, auth}){
       try {
          const user = await auth.loginViaId(1)

       } catch (error) {
          return error
       }

   }

  async getUser({request, response, params, auth}){
      try {
        const user = await auth.getUser()


        return user
      } catch (error) {
         return false
      }

  }
  async logout({request, response, params, auth}){
      await auth.logout()
      return 'logged out'
  }

}

module.exports = UserController
