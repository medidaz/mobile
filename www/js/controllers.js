angular.module('medidaz.controllers', [])

  .controller('HomeCtrl', function ($scope, AlimentoAPIService, FonteAPIService, MedidaAPIService,  MedicaoAPIService) {
    AlimentoAPIService.quantidadeAlimentos().then(function (data) {
      $scope.quantidade_alimentos = data.quantidade;
    });
    
    FonteAPIService.quantidadeFontes().then(function (data) {
      $scope.quantidade_fontes = data.quantidade;
    });
    
    MedidaAPIService.quantidadeMedidas().then(function (data) {
      $scope.quantidade_medidas = data.quantidade;
    });
    
    MedicaoAPIService.quantidadeMedicoes().then(function (data) {
      $scope.quantidade_medicoes = data.quantidade;
    });
    
  })

  .controller('ConsultaCtrl', function ($scope, AlimentoAPIService, $ionicLoading) {

    $scope.consulta = {};

    $scope.consultar = function () {
      $ionicLoading.show();
      AlimentoAPIService.buscaAlimento($scope.consulta.texto).then(function (data) {
        $scope.alimentos = data.alimentos;
      });
      $ionicLoading.hide();
    }
  })

  .controller('AlimentosCtrl', function ($scope, $stateParams, AlimentoAPIService) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('SugestaoCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
