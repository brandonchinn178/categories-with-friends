import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/routes.dart';

@Component(
  selector: 'my-app',
  template: '''
    <h1>Generic Category Game</h1>
    <nav>
      <a [routerLink]="RoutePaths.root.toUrl()"
         [routerLinkActive]="'active-route'">Home</a>
    </nav>
    <router-outlet [routes]="Routes.all"></router-outlet>
  ''',
  styles: ['.active-route {color: #039be5}'],
  directives: [routerDirectives],
  exports: [RoutePaths, Routes],
)
class AppComponent {}
