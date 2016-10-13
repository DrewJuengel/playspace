angular.module('Pam', ['ngRoute'])
    .controller('DashboardController', dashboard)
    .factory('artificialFactory', aiFactory);

dashboard.$inject=['$scope', 'artificialFactory', '$http', '$timeout'];
aiFactory.$inject=['$http'];

function dashboard($scope, artificialFactory, $http, $timeout) {
    console.info('dashboard controller initialized');
    var dCtrl = this;

    dCtrl.command = "";

    dCtrl.sendCommand = function() {
    
        artificialFactory.get(dCtrl.command).then(function(serverData) {
            console.log(serverData);
            var userResponse = prompt(serverData.data.result.fulfillment.speech)    
            if (userResponse.indexOf('minute') > -1 ){
                var thenum = userResponse.replace( /\D+/g, '');
                var thenum = parseInt(thenum);
                var milli = thenum * 1000 * 60;
                $timeout(function() {
                    alert('Times Up, Drew!')
                    console.log('timer')
                }, milli)



            }

            if (userResponse.indexOf('second') > -1 ){
                var thenum = userResponse.replace( /\D+/g, '');
                var thenum = parseInt(thenum);
                var milli = thenum * 1000;
                $timeout(function() {
                    alert('Times up, Drew!')
                    console.log('timer')
                }, milli)

                

            }
        //         var timerID = setTimeout(function() {

        //             console.log('....')
        //         }, )
        })
    
        // $http.post('/newCommand', {
        //     command: dCtrl.command
        // })
        //     .then(
        //        function(data) {
        //            console.log('data');
        //        } 
        //     )
    }

    dCtrl.submit = function() {
        artificialFactory.get(dCtrl.command).then(function(res) {
            console.log(res)
        })
    }
}

function aiFactory($http){
    console.log('Factory is running..')
    var factoryObj = {}

    // var baseUrl = 'https://api.api.ai/v1/';


    return {
        get: function(command) {
            return $http.get('/api/ai/' + command)
        }
    }
}

