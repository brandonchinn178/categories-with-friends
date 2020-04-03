import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/routes.dart';

@Component(
  selector: 'my-app',
  template: '''
    <h1 class="master-title">
      <a [routerLink]="RoutePaths.root.toUrl()"
         [routerLinkActive]="'active-route'">Generic Category Game</a>
    </h1>
    <router-outlet [routes]="Routes.all"></router-outlet>
  ''',
  styleUrls: ['master.css'],
  directives: [routerDirectives],
  exports: [RoutePaths, Routes],
)
class AppComponent {}
