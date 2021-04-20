'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
  Route.post('signup', 'Auth/AuthController.signup')
  Route.post('/login', 'Auth/AuthController.login')
  Route.get('/myuser', 'Auth/AuthController.getUser')
  Route.get('/post', 'Auth/AuthController.getUser')
  Route.get('/logout', 'Auth/AuthController.logout')
}).prefix('auth')

// Route.get('/login', 'UserController.user')
Route.get('/myuser', 'UserController.getUser')
// Route.post('/post', 'UserController.getUser')
Route.get('/logout', 'UserController.logout')
