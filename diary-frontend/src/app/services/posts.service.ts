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

  fetchPosts(): Observable<any> {
    return this.http.get(this.postsUrl, httpOptions)
  }

  fetchPostsById(id: string): Observable<any> {
    const postUrl = `${this.postsUrl}/${id}`
    return this.http.get(postUrl, httpOptions)
  }

  createPost(postData: Post): Observable<any> {
    const url = `${this.postsUrl}/create`
    return this.http.post<Post>(url, postData, httpOptions)
  }

  updatePost(postData: Post, id: string): Observable<any> {
    const url = `${this.postsUrl}/${id}`
    return this.http.patch<Post>(url, postData, httpOptions)
  }

  deletePost(id: string): Observable<any> {
    const url = `${this.postsUrl}/${id}`
    return this.http.delete<Post>(url, httpOptions)
  }
}
