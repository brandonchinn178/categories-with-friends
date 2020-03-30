import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';

@Component(
  selector: 'root',
  templateUrl: 'root.html',
  styleUrls: ['root.css'],
  directives: [materialInputDirectives, MaterialButtonComponent],
)
class RootComponent {
  String gameId = '';

  void onEnter() {
    print('Route here');
  }
}
