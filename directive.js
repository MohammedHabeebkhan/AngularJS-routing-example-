


var app = angular.module('myapp');

app.directive("myDirect", function () {

    return {
        templateUrl: '/table.html',
        scope: {
            items: "="
        },
        link: function (scope, element, attr) {
            console.log("Link Called", element);
        }
    };
})
