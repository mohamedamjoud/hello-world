import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses"> {{course}} </li>
    </ul>

    <img src="{{ _imageUrl }}"/>

    <button class="btn btn-primary">btn</button>


    `
})
export class CoursesComponent{

 _title : string ="Liste of cources :)";
 _imageUrl ="https://www.gstatic.com/webp/gallery/1.jpg";

courses;

constructor(service: CoursesService) {
    this.courses = service.getCourses();
}
public get title() : string {
    return this._title;
}
public set title(v : string) {
    this._title = v;
}
public  getTitle() : string {
    return this._title;
}

}