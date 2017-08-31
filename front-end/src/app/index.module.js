/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { NavbarController } from './components/navbar/navbar.controller';
import { FooterController } from './components/footer/footer.controller';
import { TopContentController } from './components/topContent/topContent.controller';
import { CenterContentController } from './components/centerContent/centerContent.controller';
import { VideoSectionController } from './components/videoSection/videoSection.controller';
import { CustomizedSectionController } from './components/customizedSection/customizedSection.controller';
import { MoreSectionController } from './components/moreSection/moreSection.controller';
import { MapContentController } from './components/mapContent/mapContent.controller';

import { CompareToDirective } from './directives/compareTo.directive';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';

import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { TopContentDirective } from '../app/components/topContent/topContent.directive';
import { CenterContentDirective } from '../app/components/centerContent/centerContent.directive';
import { VideoSectionDirective } from '../app/components/videoSection/videoSection.directive';
import { CustomizedSectionDirective } from '../app/components/customizedSection/customizedSection.directive';
import { MoreSectionDirective } from '../app/components/moreSection/moreSection.directive';
import { MapContentDirective } from '../app/components/mapContent/mapContent.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('stlcFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer','pascalprecht.translate'])
  .constant('API_URL', 'http://localhost:5000/')
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .controller('TopContentController', TopContentController)
  .controller('CenterContentController', CenterContentController)
  .controller('VideoSectionController', VideoSectionController)
  .controller('CustomizedSectionController', CustomizedSectionController)
  .controller('MoreSectionController', MoreSectionController)
  .controller('MapContentController', MapContentController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeFooter', FooterDirective)
  .directive('acmeTopContent', TopContentDirective)
  .directive('acmeCenterContent', CenterContentDirective)
  .directive('acmeVideoSection', VideoSectionDirective)
  .directive('acmeCustomizedSection', CustomizedSectionDirective)
  .directive('acmeMapContent', MapContentDirective)
  .directive('acmeMoreSection', MoreSectionDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('compareTo', CompareToDirective);
