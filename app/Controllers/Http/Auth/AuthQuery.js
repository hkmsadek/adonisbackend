'use strict'
const User = use('App/Models/User')
class AuthQuery{
    createUser(user){
       return User.create(user)
    }
    countUserFieldByKey(column, value){
       return User.query().where(column, value).getCount()
    }
}


module.exports = AuthQuery
