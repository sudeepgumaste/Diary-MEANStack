import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  title: string;
  body: string;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const postData: Post ={
      title: this.title,
      body: this.body
    }

    this.postsService.createPost(postData).subscribe(
      data => {
        console.log(data);
      },
      err=>{
        console.log(err.error);
      }
    )
  }

}
