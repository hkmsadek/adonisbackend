'use strict'
const User = use('App/Models/User')
class UserController {
   async user({request, response, params, auth}){
       try {
          const user = await auth.loginViaId(34)

       } catch (error) {
          return error
       }

   }

  async getUser({request, response, params, auth}){
      try {
        const user = await auth.getUser()
        console.log('cookie is.. haha', request.headers())

        return user
      } catch (error) {
          //console.log('error is', error)
          return 'not logged in ... '
      }

  }
  async logout({request, response, params, auth}){
      await auth.logout()
      return 'logged out'
  }

}

module.exports = UserController
