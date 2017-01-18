angular.module('app', ['ngRoute', 'ngAnimate', 'toaster'])

.config(AppConfig);

function AppConfig($routeProvider) {

  $routeProvider.
  when('/', {
    title: 'Dashboard',
    templateUrl: 'layout/main.html',
    controller: 'AppController'
  })

  .when('/about', {
    title: 'About',
    templateUrl: 'layout/about.html',
    controller: 'AppController'
  })

  .when('/service', {
    title: 'Services',
    templateUrl: 'layout/services.html',
    controller: 'AppController'
  })

  .when('/pricing', {
    title: 'Pricing table',
    templateUrl: 'layout/pricing.html',
    controller: 'AppController'
  })

  .when('/contact', {
    title: 'Contact Info',
    templateUrl: 'layout/contact.html',
    controller: 'ContactController'
  })

  .when('/blog', {
    title: 'Dashboard',
    templateUrl: 'layout/blog.html',
    controller: 'BlogController'
  })

  .when('/blog/post', {
    title: 'Dashboard',
    templateUrl: 'layout/blog_item.html',
    controller: 'BlogController'
  })

  .otherwise({
    redirectTo: '/404',
    templateUrl: 'layout/404.html',
    controller: 'AppController'
  });

}
