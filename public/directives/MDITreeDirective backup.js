clientApp.directive("tree", function($compile) {
    return {
        restrict: "E",
        transclude: true,
        scope: {family: '='},
        template:

           
            '<ul ng-class=" family.level == 1 ? \'nav\' : (family.level==2 ? \'nav nav-second-level collapse\' : \'nav nav-third-level collapse\')" '+ 
            'style="list-style: none;">' + 
                '<div ng-transclude></div>' +
                '<p>{{ family.name }}</p>' + 
                '<li ng-repeat="child in family.children">' +
                    '<div ng-if="child.name"><tree family="child"></tree></div>' +
                '</li>' +
            '</ul>',
        compile: function(tElement, tAttr, transclude) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents, transclude);
                }
                compiledContents(scope, function(clone, scope) {
                         iElement.append(clone); 
                });
            };
        }
    };
});