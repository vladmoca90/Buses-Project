function dropdownController($scope, $http) {

    $scope.languagesMenu = [
        { languageFlag: "../../Images/UK.jpg", languageName: "English" },
        { languageFlag: "../../Images/Spain.png", languageName: "Spanish" },
        { languageFlag: "../../Images/France.png", languageName: "French" },
        { languageFlag: "../../Images/Italy.png", languageName: "Italian" },
        { languageFlag: "../../Images/Germany.png", languageName: "German" },
        { languageFlag: "../../Images/China.png", languageName: "Chinese" }
    ];

}

dropdownController.$inject = ["$scope", "$http"];