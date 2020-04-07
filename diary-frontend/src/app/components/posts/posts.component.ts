import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PostDB } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService : PostsService) { }

  postsData:PostDB[] = [{
    _id:"Loading",
    title:"Loading",
    body:"Loading",
    date:Date.now(),
    userId:"Loading"
  }]

  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe(
      data => {
        this.postsData = data
      },
      err => {
        console.log(err)
      }
    )
  }

}
