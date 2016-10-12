import angular from 'angular';

import Home from './home';
import About from './about';

const componentModule = angular.module('app.components', [
  Home,
  About
])
.name;

export default componentModule;
