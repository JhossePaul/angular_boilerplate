import template from './wordcloud.html';
import controller from './wordcloud.controller';

export default class HexplotDirective {
  constructor () {
    this.template = template;
    this.restrict = 'E';
    this.scope = {};
    this.controller = controller;
  }

  link () {

  }
}
