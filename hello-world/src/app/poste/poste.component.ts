import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  posts : any [];
  
  constructor(private postService : PostService) { 
    
  }

  ngOnInit(){
  this.postService.get()
  .subscribe(
    Response=>{
      this.posts = Response as [];
    });
  }

  addPost(input : HTMLInputElement){
    let post = { title : input.value };
    input.value = "";

    this.posts.splice(0,0,post);  

    this.postService.add(post)
    .subscribe(
      id => {
        post['id'] = id;
      },
      (error : AppError) => {
        this.posts.splice(0,1);  

        if(error instanceof BadRequestError){
          //this.form.setErrors(error.originalError);
        }else throw error;
      });
  }
  updatePost(post){
    this.postService.update(post)
    .subscribe(
      updatedPost=> {
        console.log(updatedPost);
        });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.postService.delete(post.id)
    .subscribe(
      null,
      (error : AppError)=>{

        this.posts.splice(index,0,post);

        if(error instanceof NotFoundError){
          alert('This post has already been deleted.');
        }else throw error;
      });
  }
}

