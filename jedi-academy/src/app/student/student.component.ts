import { Student } from './student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  // inputs: ['name', 'isJedi'], // Outra forma de declarar inputs
})
export class StudentComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
