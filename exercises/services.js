/**
 * Created by heaven on 2015/1/16.
 */

var myApp = angular.module('myApp',[]);

myApp.factory('bookService',function($http){
    return {
        getBookList: function(author){
            return $http.get('../data/books0.json');
        }
    }
});

myApp.controller('ServicesController',function($scope,$timeout,bookService){
    var timeout;
    $scope.books = {};
    $scope.$watch('author',function(newAuthor){
        if(newAuthor){
            if(timeout){
                $timeout.cancel(timeout);
            }
            timeout = $timeout(function(){
                bookService.getBookList(newAuthor)
                    .success(function(data,status){
                        console.log(data);
                        $scope.books = data;
                    }).error(function(data,status){
                        console.log('get data error');
                    });
            },350);
        }
    });
});
