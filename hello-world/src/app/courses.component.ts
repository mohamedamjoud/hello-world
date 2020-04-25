import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses"> {{course}} </li>
    </ul>
    
{{ course.title | uppercase}} <br/>
{{ course.students | number }} <br/>
{{ course.rating | number: '2.1-2' }} <br/>
{{ course.price | currency: 'AUD':true:'3.2-2' }} <br/>
{{ course.releaseDate | date }} <br/>`
})
export class CoursesComponent{

 _title : string ="Liste of cources :)";
 _imageUrl ="https://www.gstatic.com/webp/gallery/1.jpg";
_isActive = false;
_email;
courses;
course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
}


printEmail(){
console.log(this._email);
}
getEmail(text){
    console.log(text);
}
enter($event){
console.log($event.target.value);
}
onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked",$event.clientX);
}
constructor(public service ?: CoursesService) {
    this.courses = service.getCourses();
}
CoursesComponent(){}

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