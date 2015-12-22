clientApp.controller("MDITreeController", function($scope) {
    $scope.family = 
   
   {
    "name": "super parent",
    "level": "0",
    "ref":"",
    "children": [
      {
        "name": "Dashboard",
        "level": "1",
        "ref":""
      },
      {
        "name": "Student",
        "level": "1",
        "ref":"",
        "children": [
          {
            "name": "Admit Student",
            "level": "2",
        "ref":"admitStudent"
          },
          {
            "name": "Student Info",
            "level": "2",
        "ref":""
        
          },
          {
            "name": "pchild2",
            "level": "2",
            "ref":""
          }
        ]
      },
      {
        "name": "Teacher",
        "level": "1",
        "ref":""
      },
      {
        "name": "parent",
        "level": "1",
        "ref":""
      },
      {
        "name": "Class",
        "level": "1",
        "ref":""    
      },
      {
        "name": "Subject",
        "level": "1",
        "ref":""
      },
      {
        "name": "Class Routine",
        "level": "1",
        "ref":""    
      },
      {
        "name": "Attendence",
        "level": "1",
        "ref":""
      },
      {
        "name": "Exam",
        "level": "1",
        "ref":""
      }
    ]
  }


;

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