
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

import { EventPreviewCard } from './components/event-preview/event-preview-card.directive.js';

angular.module('soonisFrontend', [

  'soonisFrontend.event',

  'ngAnimate',
  'ngCookies',
  'restangular',
  'ui.router',
  'toastr'
])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);

angular.module('soonisFrontend.event', [])
  .directive('eventPreviewCard', () => new EventPreviewCard);
