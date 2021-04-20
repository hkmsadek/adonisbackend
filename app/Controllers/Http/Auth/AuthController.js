'use strict'
const AuthService = use('./AuthService')

class AuthController {

  constructor(){
      this.authService = new AuthService()
  }
  async signup({request, response, auth}){
      return this.authService.createUser(request.all(), response, auth)

  }

  async login({request, response, params, auth}){
    return this.authService.login(request.all(), response, auth)
  }

}


module.exports = AuthController
