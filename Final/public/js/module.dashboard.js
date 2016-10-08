angular.module('module.dashboard', ['ngRoute'])
    .controller('DashboardController', dashboard)
    .factory('artificialFactory', aiFactory);

dashboard.$inject=['$scope', 'aiFactory'];
aiFactory.$inject=['$http'];

function dashboard($scope, aiFactory) {
    console.info('Dashboard initialized');
    var dCtrl = this;
}

function aiFactory($http){
    console.log('Factory is running..')
    var factoryObj = {}

    return factoryObj;
}