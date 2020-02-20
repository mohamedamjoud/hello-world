import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
   @Input('isFavorite') isFavorite :  boolean = false;
   @Output() change = new EventEmitter();
  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
