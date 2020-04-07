import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  title: string;
  body: string;
  id: string;

  constructor(private postsService:PostsService, 
      private activatedRoute:ActivatedRoute,
      private router:Router
      ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params.id){
      this.id = this.activatedRoute.snapshot.params.id;
      this.postsService.fetchPostsById(this.id).subscribe(
        data=>{
          this.title = data.title;
          this.body = data.body;
        },
        error=>{
          console.log(error);
        }
      )
    }
  }

  onSubmit(){
    const postData: Post ={
      title: this.title,
      body: this.body
    }

    this.postsService.updatePost(postData,this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['posts'])
      },
      err=>{
        console.log(err);
      }
    )
  }
}
