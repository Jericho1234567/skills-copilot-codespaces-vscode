function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/number.html',
        controller: 'SkillsMemberController',
         controllerAs: 'vm',
         bindToController: true,
         scope: {
            member: 'm'
         }
    };
}
