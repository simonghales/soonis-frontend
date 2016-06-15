
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

angular.module('soonisFrontend', ['ngAnimate', 'ngCookies', 'restangular', 'ui.router', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
