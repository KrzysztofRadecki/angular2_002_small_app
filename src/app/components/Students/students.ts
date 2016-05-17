import {Component, View, bootstrap} from 'angular2/angular2';

// deklaracja znacznika <students></students>
@Component({
  selector: 'students'
})
// deklaracja widoku html, wczytywanego do znacznika <students></students>
@View({
    templateUrl: './app/views/Students/students.html' 
})

// Kontroler - Students
class StudentsComponent {
  students: Array<string>;  
  constructor() {
    this.students = ['Janusz', 'Danuta', 'Tomasz', 'Karol'];
  }
}

bootstrap(StudentsComponent);
