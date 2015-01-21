/**
 * Created by Heaven on 2015/1/18.
 */

var myApp = angular.module('myApp',[]);


//注射器加载完成所有模块时，会执行run，且只执行一次
myApp.run(function($templateCache){
    $templateCache.put('hello.html','<div>hello everyone!</div>');
});

/**
 * template,指定替换指令的html内容或者模版链接
 * transclude:用来告诉指令内部的内容填充到那个部分
 * replace表示是否替换当前的元素
 */

myApp.directive('hello',function(){
    return {
        restrict: 'EACM',
        //template: 'hello.html'
        //template: $templateCache.get('hello.html');
        template: '<div>hello everyone! <div ng-transclude></div></div>',
        transclude: true,
        replace: true
    }
});



//指令复用
myApp.controller('MyController1',function($scope){
    $scope.loadData = function(){
        console.log('数据1加载中。。。11111。');
    }
});
myApp.controller('MyController2',function($scope){
    $scope.loadData2 = function(){
        console.log('数据2加载中。。。2222222。');
    }
});

myApp.directive('loader',function(){
    return {
        restrict: 'EA',
        replace: true,
        template: '<div>数据加载中。。。。</div>',
        //controller是用来对外暴露方法的
        controller: function($scope){
            $scope.func1 = function(){

            };
            $scope.func2 = function(){

            };
        },
        link: function(scope,element,attrs){
            element.bind('click',function(){
                //注意：这里的howtoload必须全部小写，这是一个坑
                scope.$apply(attrs.howtoload);
            });
        }
    }
});

