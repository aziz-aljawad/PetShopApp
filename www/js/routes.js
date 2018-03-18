angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

    .state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  controller: 'LoginCtrl'
})

.state('signup', {
url: '/signup',
templateUrl: 'templates/signup.html',
controller: 'SignupCtrl'
})

//dogs
  .state('tabsController.dogShop', {
    url: '/dogs',
    views: {
      'tab3': {
        templateUrl: 'templates/dogShop.html',
        controller: 'dogShopCtrl'
      }
    }
  })

  .state('tabsController.dogDetail', {
    url: '/dogs/:dogname',
    views: {
      'tab3': {
        templateUrl: 'templates/dogsDetail.html',
        controller: 'dogDetailCtrl'
      }
    }
  })
//dogs
//rabbits
  .state('tabsController.rabbitShop', {
    url: '/rabbits',
    views: {
      'tab3': {
        templateUrl: 'templates/rabbitShop.html',
        controller: 'rabbitShopCtrl'
      }
    }
  })
  .state('tabsController.rabbitDetail', {
    url: '/rabbits/:rabbitname',
    views: {
      'tab3': {
        templateUrl: 'templates/rabbitDetail.html',
        controller: 'rabbitDetailCtrl'
      }
    }
  })
//rabbits

//cats
  .state('tabsController.catShop', {
    url: '/cats',
    views: {
      'tab3': {
        templateUrl: 'templates/catShop.html',
        controller: 'catShopCtrl'
      }
    }
  })

  .state('tabsController.catDetail', {
    url: '/cats/:catname',
    views: {
      'tab3': {
        templateUrl: 'templates/catsDetail.html',
        controller: 'catDetailCtrl'
      }
    }
  })
  //cats

  //fishes
  .state('tabsController.fishShop', {
    url: '/fishes',
    views: {
      'tab3': {
        templateUrl: 'templates/fishShop.html',
        controller: 'fishShopCtrl'
      }
    }
  })

  .state('tabsController.fishDetail', {
    url: '/fishes/:fishname',
    views: {
      'tab3': {
        templateUrl: 'templates/fishesDetail.html',
        controller: 'fishDetailCtrl'
      }
    }
  })
//fishes
  .state('tabsController.shop', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/sHOP.html',
        controller: 'shopCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page5',
    views: {
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.cart', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })


/**NEWS**/
.state('tabsController.updates', {
  url: '/updates',
  views: {
    'updates': {
      templateUrl: 'templates/updates.html',
       controller: 'updatesCtrl'
     }
   }
 })
   .state('tabsController.updatesTitles', {
   url: '/updates/:nprovider',
   views: {
    'updates': {
       templateUrl: 'templates/updatesTitles.html',
   controller: 'updatesTitlesCtrl'
     }
   }
 })


 .state('tabsController.updatesSections', {
 url: '/updates/nprovider/updatesSections',
 views: {
   'updates': {
     templateUrl: 'templates/updatesSections.html',
 controller: 'updatesSectionsCtrl'
   }
 },
 params:{ nprovider:null, title:null, url:null  }
})
.state('tabsController.updatesDetails', {
  url: '/updates/nprovider/updatesSections/updatesDetails',
  views: {
    'updates': {
      templateUrl: 'templates/updatesDetails.html',
      controller: 'updatesDetailsCtrl'
    }
  },
  params:{content:null, title:null, url:null}
})

$urlRouterProvider.otherwise('/login');


});
