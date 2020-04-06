import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post, PostDB } from '../models/post.model';
import { backendUrl } from '../config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl: string = `${backendUrl}/posts`

  constructor(private http: HttpClient) { }

  fetchPosts():Observable<any>{
    return this.http.get(this.postsUrl, httpOptions)
  }

  createPost(postData: Post): Observable<any> {
    const url = `${this.postsUrl}/create`
    return this.http.post<Post>(url, postData, httpOptions)
  }
}
