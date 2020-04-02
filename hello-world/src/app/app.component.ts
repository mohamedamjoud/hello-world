import { FavoriteChangedEventArgs } from './course/course.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';
  post = {
    title: "Title",
    isFavorite: true
  };
  courses = [1,2];
  onFavoriteChange(eventArgs : FavoriteChangedEventArgs){
    console.log("Favorite changed" + eventArgs.newValue);
  }
}
