import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PostDB } from 'src/app/models/post.model';

import { ReplaceAccessTokenService } from '../../services/replace-access-token.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  intervalId;

  constructor(private postsService: PostsService, private replaceAccessTokenService: ReplaceAccessTokenService) { }

  postsData: PostDB[] = [{
    _id: "Loading",
    title: "Loading",
    body: "Loading",
    date: Date.now(),
    userId: "Loading"
  }]

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
      console.log('refreshing');
      this.replaceAccessTokenService.setAccessToken()
    }, 5 * 60000)

    this.postsService.fetchPosts().subscribe(
      data => {
        this.postsData = data
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnDestroy(){
    console.log("Unmounting")
    clearInterval(this.intervalId)
  }

  onDelete(id: string) {
    console.log(id);
    // remove from db
    this.postsService.deletePost(id).subscribe(
      data => {
        console.log(data);
        // remove from UI
        this.postsData = this.postsData.filter(
          post => post._id !== id
        )
      }
    )
  }
}
