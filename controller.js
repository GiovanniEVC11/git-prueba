var app = angular.module("PrimerModulo", []);
/* nombre del modulo, son los modulos de los que depende el modulo que creamos */
/* modulo, dependencias */

app.controller("FirstController", function($scope){
  $scope.nombre = " by Giovanni EVC";
}).controller("ComentariosControlador", function($scope){
    $scope.newComment = {};
    $scope.comentarios = [
      {
        tittle: "Estudiante",
        comment: "Hola, soy Ingeniero del Instituo Tecnologico de Pachuca",
        username: "AbnerDavidVC"
      }
    ];
    $scope.addComment = function(){
      $scope.comentarios.push($scope.newComment);
      $scope.newComment = {};
    }
});

   /* Peticion asincronica */
app.controller("ajaxHttpController", APIjson);

function APIjson ($scope, $http){
  $scope.posts = [];
  $scope.newPost = {};

  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1/comments'
  }).then( function successCallback(response){
      console.log(response);
      $scope.posts = response.data;
  }, function errorCallback(response){
      console.log("No se obtuvo los datos JSONP");
  });

}
