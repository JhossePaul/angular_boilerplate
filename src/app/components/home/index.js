import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HexplotDirective from './hexplot';
import TsplotDirective from './tsplot';
import WordcloudDirective from './wordcloud';

const homeModule = angular.module('home', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
  })
  .directive('hexplot', () => new HexplotDirective())
  .directive('tsplot', () => new TsplotDirective())
  .directive('wordcloud', () => new WordcloudDirective())
  .component('home', homeComponent)
  .name;

export default homeModule;
