import { Component, OnInit } from '@angular/core';
import { GitHubFollowersService } from '../services/git-hub-followers.service';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap , map } from 'rxjs/operators';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {

  followers: any [];
  constructor(
    private gitHubFollowersService: GitHubFollowersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.queryParamMap,
      this.route.queryParams]
    ).pipe(combined=>{
      // let id = combined[0].get('id');
      // console.log(id);
      return this.gitHubFollowersService.get();
    })
    .subscribe(followers=>{
        this.followers = followers as []
        console.log(followers);

    });



   
  }
}
