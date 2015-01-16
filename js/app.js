/**
 * Created by heaven on 2015/1/14.
 */

var bookStoreApp = angular.module('bookStoreApp',['ui.router','ngGrid','LoginFormModule','BookListModule', 'BookDetailModule']);

/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 */
bookStoreApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
bookStoreApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url: '/index',
        views: {
            '':{
                templateUrl: 'partials/home.html'
            },
            'main@index': {
                templateUrl: 'partials/loginForm.html',
                controller: 'LoginController'
            }
        }
    }).state('confirm',{
        url: '/confirm',
        views: {
            '':{
                templateUrl: 'partials/home.html'
            },
            'main@confirm': {
                templateUrl: 'partials/confirmForm.html',
                controller: 'ConfirmController'
            }
        }
    }).state('booklist',{
        url: '/booklist/{bookType:[0-9]{1,4}}',
        views: {
            '':{
                templateUrl: 'partials/bookList.html'
            },
            'booktype@booklist':{
                templateUrl: 'partials/bookType.html'
            },
            'booktrid@booklist': {
                templateUrl: 'partials/bookGrid.html'
            }
        }
    }).state('addbook',{
        url: '/addbook',
        templateUrl: 'partials/addBookForm.html'
    }).state('bookdetail',{
        url: '/bookdetail/:bookId',
        templateUrl: 'partials/bookDetail.html'
    });
});
