var app = angular.module('MiApplicacion',[]);

app.controller('ControllerPersonas',function($scope){
	
	var p1 = {
		nombre:'pablo',
		id:'123321',
		titulo:'pruebisima',
		cuerpo:'asdasdasdsa'
	};
	
	var p2 = {
		nombre:'Ramon',
		id:'321123',
		titulo:'pruebotema',
		cuerpo:'qweqwewqeq'
	}
	
	$scope.listaPersonas = [p1,p2];
	
});

app.controller('ControllerPersonasSV',function($scope,$http){
	var ojetoRetorno = $http.get('http://jsonplaceholder.typicode.com/posts')
		.success(function(response){
		$scope.listaPersonas = response;
		})
		.error(function(err){
		alert(err);
		});
	var p;
});