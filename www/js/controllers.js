angular.module('app.controllers', [])

//login
.controller('LoginCtrl', function($scope, bakendlessAPI, $state, $ionicLoading, $ionicPopup) {
  $scope.loginData = {
 "login" : null,
 "password" : null,
}
$scope.doLogin = function(){
  $ionicLoading.show();
bakendlessAPI.login($scope.loginData)
.then(function(res){
console.log(res);
$ionicPopup.alert({title: "Success", template: "Login Success"});
$state.go('tabsController.home');
})
.catch(function(err) {
console.log(err);
$ionicPopup.alert({title: "Error", template: "User Name or Password are wrong"});
})
.finally(function() {
  console.log("finish");
  $ionicLoading.hide();
});

};
})

//signup
.controller('SignupCtrl', function($scope) {

})

//Dogs
.controller('dogShopCtrl', function ($scope, dogs) {

$scope.myDogs = dogs.all();

})

.controller('dogDetailCtrl', function ($scope, dogs, $stateParams) {

$scope.oneDog = dogs.get($stateParams.dogname);



})
//Dogs

//rabbits
.controller('rabbitShopCtrl',function ($scope,rabbits, $stateParams) {

$scope.myRabbits = rabbits.all();
})
.controller('rabbitDetailCtrl', function ($scope, rabbits, $stateParams) {

$scope.oneRabbit = rabbits.get($stateParams.rabbitname);



})
//rabbits

//cats
.controller('catShopCtrl',  function ($scope,cats,$stateParams) {
$scope.myCats = cats.all();

})
.controller('catDetailCtrl', function ($scope,cats, $stateParams) {

$scope.oneCat = cats.get($stateParams.catname);



})
//cats

.controller('fishShopCtrl', function ($scope,fishes ,$stateParams) {
  $scope.myFishes = fishes.all();

})
.controller('fishDetailCtrl', function ($scope,fishes ,$stateParams) {
$scope.oneFish = fishes.get($stateParams.fishname);

})


.controller('shopCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('homeCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
.controller('updatesCtrl', function($scope, $stateParams)
{



})



.controller('updatesSectionsCtrl', ['$scope', 'NewsFactory','$stateParams',
function ($scope, NewsFactory,$stateParams) {
$scope.currentSP= $stateParams.nprovider;
$scope.currentSectionTitle=$stateParams.title;

$scope.loadNews =function(){
 $scope.posts = NewsFactory.getNewsFeed($stateParams.url)
 .then(function(res){
 console.log(res.data.items);
 if (res.data.items){
 $scope.posts = res.data.items;
 }else{
 console.log("Feed error : "+ res.data);
 } })
 .catch(function(res) {
 console.log("Connection error : ");
 })
 .finally(function() {
 });
};
$scope.loadNews();

$scope.goToDetails= function (sect) {
  if(sect.enclosure.link){
    $state.go('tabsController.updatesDetails', {content:sect.content, title:sect.title, url:sect.enclosure.link});
  }else{
    $state.go('tabsController.updatesDetails', {content:sect.content, title:sect.title, url:sect.enclosure.thumbnail});
  };

};

}])

.controller('updatesDetailsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
  $scope.currTitle= $stateParams.title;
  $scope.currUrl= $stateParams.url;
  $scope.currContent= $stateParams.content;

}])
.controller('updatesTitlesCtrl', ['$scope','$state' ,'$stateParams',
function ($scope, $state, $stateParams) {
$scope.currentSP= $stateParams.nprovider
$scope.rssNews = [
//PetFoodIndustry provider
{ ServiceProvider: 'PetfoodIndustry', title: 'pet food ingredients', url: 'https://www.petfoodindustry.com/rss/topic/212-pet-food-ingredients' },
{ ServiceProvider: 'PetfoodIndustry', title: 'Pet Food Palatability', url: 'https://www.petfoodindustry.com/rss/topic/251-pet-food-palatability' },
{ ServiceProvider: 'PetfoodIndustry', title: 'Pet Food Additives / Supplements', url: 'https://www.petfoodindustry.com/rss/topic/250-pet-food-additives-supplements'},
// WWF
{ ServiceProvider: 'WWF', title: 'Stories Feed', url: 'http://feeds.feedburner.com/WWFStories'},
{ ServiceProvider: 'WWF', title: 'World Wildlife Fund In the News', url: 'http://feeds.feedburner.com/WWFStories'}
 ];
 $scope.goToSection = function(sect){
$state.go('tabsController.updatesSections',{nprovider:sect.ServiceProvider, title:sect.title, url:sect.url });

 };

}])
.controller('profileCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('cartCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
