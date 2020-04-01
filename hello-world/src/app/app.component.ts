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
  }
  teams =[];
  courses = [1,2];
  viewMode = 'map'; 
  
  onFavoriteChange(eventArgs : FavoriteChangedEventArgs){
    console.log("Favorite changed" + eventArgs.newValue);
  }

  onRemove(team)
  {
    let index = this.teams.indexOf(team);
    this.teams.splice(team,1);
  }
  onAdd()
  {
    let team = { id:5 , name: 'Bayern'};
    this.teams.push(team);   
  }
  trackCourse(index,course){
    return course ? course.id : undefined;
  }
loadObject(){
  this.teams = [
    {id:1,name:'Fcb'},
    {id:2,name:'Real Madrid'},
    {id:3,name:'Liverpol'},
    {id:4,name:'Man City'},

  ];
}


isSelected = false;
onClickStar(){
this.isSelected = !this.isSelected;
}

document={
  reference : 'leg102594',
  signatorie : null
};

}
