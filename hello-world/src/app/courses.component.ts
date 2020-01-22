import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses"> {{course}} </li>
    </ul>
    `
})
export class CoursesComponent{

public _title : string ="Liste of cources :)";
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