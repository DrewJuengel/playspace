angular.module('Pam', ['ngRoute'])
    .controller('DashboardController', dashboard)
    .factory('artificialFactory', aiFactory);

dashboard.$inject=['$scope', 'artificialFactory'];
aiFactory.$inject=['$http'];

function dashboard($scope, artificialFactory) {
    console.info('dashboard controller initialized');
    var dCtrl = this;
}

function aiFactory($http){
    console.log('Factory is running..')
    var factoryObj = {}

        

    return factoryObj;
}