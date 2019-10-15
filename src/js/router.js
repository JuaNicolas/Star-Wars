import crossroads from 'crossroads'

import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'
import localStorageController from './controllers/localStorageController'


function router() {

  // Route Home
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html', homeController)
  })
  
  // Route People
  crossroads.addRoute('#/people', function () {
    console.log('People page')
    $('#root').load('./partials/people.html', peopleController)
  })
  
  // Route Contact
  crossroads.addRoute('#/contact', function () {
    console.log('Contact page')
    $('#root').load('./partials/contact.html', contactController)
  })
  
  // Route Local Storage
  crossroads.addRoute('#/local-storage', function () {
    console.log('Local-storage page')
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
  
}

export default router
