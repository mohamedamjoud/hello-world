import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
   @Input('isFavorite') isFavorite :  boolean = false;
  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
