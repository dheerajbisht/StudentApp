clientApp.controller("MDITreeController", function($scope) {
    $scope.family = {
        name : "super parent",
        level :0,
        children:[ {name : "Parent",level : 1, children: [	{ name : "Child1",
        			                                         level : 2,
                                                          children: [
                                            			  { name : "Grandchild1",
                                                            level : 3,
                                            			   	children: []},
                                            			  	{ name : "Grandchild2",level:3, children: [] },
                                            			  	{ name : "Grandchild3", level:3,children: [{name: "par pota", level:4,children: []},{name: "par poti", level:4,children: []}] }
                                            			  			]
                                            			}, {
                                                            name: "Child2",
                                                            level :2,
                                                            children: []
                                                        }]



   },{  name : "parent2", level :1 , children:[{ name:"pChild1",level:2,children:[]},{name:"pchild2",level:2,children:[] }]

   }] };

});


/*clientApp.controller("MDITreeController", function($scope) {
    $scope.treeFamily = {
        name : "Parent",
        children: [{	name : "child1"
        				children : [{name:"Grandchild1",children:[]}]
    				}]
    };
});
*/