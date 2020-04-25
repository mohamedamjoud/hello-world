import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { GitHubFollowersService } from '../services/git-hub-followers.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private  gitHubFollowersService: GitHubFollowersService,
              private router: Router) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('id');

    // this.route.snapshot.queryParamMap.get('userName');

    // this.route.paramMap
    //   .subscribe(params => {
    //      let id = +params.get('id');
    //   });

    // this.route.queryParamMap
    //   .subscribe(params => {
    //      let id = +params.get('userName');
    //   });

    // combineLatest(
    //  this.route.queryParamMap,
    //   this.route.paramMap
    // ).pipe(
    //   switchMap(combined => {
    //     let id = combined[1].get('id');
    //     return this.gitHubFollowersService.get();

    //   })
    // )
    // .subscribe(followers=>{
    //     console.log(followers);
    // });

  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams : {page:1, order:'newest'}
    });
  }

}
