/*clientApp.directive("tree", function($compile) {
    //Here is the Directive Definition Object being returned 
    //which is one of the two options for creating a custom directive
    //http://docs.angularjs.org/guide/directive
    return {
        restrict: "E",
        //We are stating here the HTML in the element the directive is applied to is going to be given to
        //the template with a ng-transclude directive to be compiled when processing the directive
        transclude: true,
        scope: {family: '='},
        template:       
            '<ul style="list-style:none;">'+ 
                //Here we have one of the ng-transclude directives that will be give the HTML in the 
                //element the directive is applied to
                '<div ng-transclude></div>' +
                '<p>{{ family.name }}</p>' + 
                '<li ng-repeat="child in family.children">' +
                    //Here is another ng-transclude directive which will be given the same transclude HTML as
                    //above instance
                    //Notice that there is also another directive, 'tree', which is same type of directive this 
                    //template belongs to.  So the directive in the template will handle the ng-transclude 
                    //applied to the div as the transclude for the recursive compile call to the tree 
                    //directive.  The recursion will end when the ng-repeat above has no children to 
                    //walkthrough.  In other words, when we hit a leaf.
                    
                    '<tree family="child"><div ng-transclude></div></tree>' +
                '</li>' +
            '</ul>',
        compile: function(tElement, tAttr, transclude) {
            //We are removing the contents/innerHTML from the element we are going to be applying the 
            //directive to and saving it to adding it below to the $compile call as the template
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                
                if(!compiledContents) {
                    //Get the link function with the contents frome top level template with 
                    //the transclude
                    compiledContents = $compile(contents, transclude);
                }
                //Call the link function to link the given scope and
                //a Clone Attach Function, http://docs.angularjs.org/api/ng.$compile :
                // "Calling the linking function returns the element of the template. 
                //    It is either the original element passed in, 
                //    or the clone of the element if the cloneAttachFn is provided."
                compiledContents(scope, function(clone, scope) {
                        //Appending the cloned template to the instance element, "iElement", 
                        //on which the directive is to used.
                         iElement.append(clone); 
                });
            };
        }
    };
});*/
clientApp.directive("tree", function($compile) {
    //Here is the Directive Definition Object being returned 
    //which is one of the two options for creating a custom directive
    //http://docs.angularjs.org/guide/directive
    return {
        restrict: "E",
        //We are stating here the HTML in the element the directive is applied to is going to be given to
        //the template with a ng-transclude directive to be compiled when processing the directive
        transclude: true,
        replace: true,
        scope: {family: '='},
        template:       
            '<ul style="list-style:none;">' + 
                //Here we have one of the ng-transclude directives that will be give the HTML in the 
                //element the directive is applied to
                '<div ng-transclude></div>' +
                
                '<li ng-repeat="child in family.children">' +

                '<a>{{child.name}}'+
                '<div ng-if="child.children"><span class="fa arrow-right"></span></div>'+'</a>' +

                    //Here is another ng-transclude directive which will be given the same transclude HTML as
                    //above instance
                    //Notice that there is also another directive, 'tree', which is same type of directive this 
                    //template belongs to.  So the directive in the template will handle the ng-transclude 
                    //applied to the div as the transclude for the recursive compile call to the tree 
                    //directive.  The recursion will end when the ng-repeat above has no children to 
                    //walkthrough.  In other words, when we hit a leaf.
                    '<tree family="child"></tree>' +
                '</li>' +
            '</ul>',
        compile: function(tElement, tAttr, transclude) {
            //We are removing the contents/innerHTML from the element we are going to be applying the 
            //directive to and saving it to adding it below to the $compile call as the template
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                
                if(!compiledContents) {
                    //Get the link function with the contents frome top level template with 
                    //the transclude
                    compiledContents = $compile(contents, transclude);
                }
                //Call the link function to link the given scope and
                //a Clone Attach Function, http://docs.angularjs.org/api/ng.$compile :
                // "Calling the linking function returns the element of the template. 
                //    It is either the original element passed in, 
                //    or the clone of the element if the cloneAttachFn is provided."
                compiledContents(scope, function(clone, scope) {
                        //Appending the cloned template to the instance element, "iElement", 
                        //on which the directive is to used.
                         iElement.append(clone); 
                });
            };
        }
    };
});