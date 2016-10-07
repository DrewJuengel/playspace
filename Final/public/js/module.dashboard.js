angular.module('module.dashboard', ['ngRoute'])
    .controller('DashboardController', dashboard)
    .factory('artificialFactory', aiFactory);

dashboard.$inject=['aiFactory'];
aiFactory.$inject=['$http'];

function dashboard() {
    console.log('Dashboard initialized');
    var dCtrl = this;
}

function aiFactory($http){

    var factoryObj = {}
}
