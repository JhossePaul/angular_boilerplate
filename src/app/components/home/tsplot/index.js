import template from './tsplot.html';
import controller from './tsplot.controller';

export default class TsplotDirective {
  constructor () {
    this.template = template;
    this.restrict = 'E';
    this.scope = {};
    this.controller = controller;
  }

  link () {

  }
}
