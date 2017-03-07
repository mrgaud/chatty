'use strict';

angular.module('chattyApp')
    .controller('MainCtrl', function($scope, messageService) {
        setInterval(function() {
            messageService.getMessages().then(function(response) {
                $scope.messages = response.data.messages.reverse();
            });
        },3000)

        $scope.addMessage = function(message,user, image) {
            if(!image){
                image = 'https://www.takemefishing.org/tmf/assets/images/fish/bigmouth-buffalo-464x170.png'
            }
            if (message) {
                messageService.addMessage(message, user, image).then(function(response) {
                    console.log(response);
                    $scope.messages = response.data.messages;
                });
            }
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
