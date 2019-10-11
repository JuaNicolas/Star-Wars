import crossroads from 'crossroads'

import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'
import localStorageController from './controllers/localStorageController'


function router() {
  crossroads.addRoute('', function () {
    console.log('Home page')
    $('#root').load('./partials/home.html', homeController)
  })

  crossroads.addRoute('#/people', function () {
    console.log('People page')
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/contact', function () {
    console.log('Contact page')
    $('#root').load('./partials/contact.html', contactController)
  })

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
