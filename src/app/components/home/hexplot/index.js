import template from './hexplot.html';
import HexplotController from './hexplot.controller';

export default class HexplotDirective {
  constructor () {
    this.template = template;
    this.restrict = 'E';
    this.scope = {};
    this.controller = HexplotController;
  }

  link () {

  }
}

