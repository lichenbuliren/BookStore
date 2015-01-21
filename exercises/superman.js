/**
 * Created by heaven on 2015/1/13.
 */
/**
 * Created by heaven on 2015/1/13.
 */
var myApp = angular.module('myApp',[]);

myApp.directive('superman',function(){
    return {
        scope: {},
        restrict: 'AE',
        //对外提供的公共方法
        controller: function($scope){
            $scope.abilities = [];
            this.addStrength = function () {
                $scope.abilities.push('strength');
            };
            this.addSpeed = function () {
                $scope.abilities.push('speed');
            };
            this.addLight = function () {
                $scope.abilities.push('light');
            };
        },
        //link方法用来处理元素初始化的一些操作
        link:function(scope,element,attrs){
            element.addClass('btn btn-primary');
            element.bind('click',function(){
               console.log(scope.abilities);
            });
        }
    }
});

myApp.directive('strength', function () {
    return {
        //依赖于'superman'指令
        require: '^superman',
        link: function(scope,element,attrs,supermanController){
            supermanController.addStrength();
            supermanController.addSpeed();
        }
    }
});

myApp.directive('speed', function () {
    return {
        //依赖于'superman'指令
        require: '^superman',
        link: function(scope,element,attrs,supermanController){
            supermanController.addSpeed();
        }
    }
});

myApp.directive('light', function () {
    return {
        //依赖于'superman'指令
        require: '^superman',
        link: function(scope,element,attrs,supermanController){
            supermanController.addLight();
        }
    }
});
