import 'jquery';
import 'normalize.css';
import 'bootstrap-loader';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';

angular.module('app', [uiRouter, Components])
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
