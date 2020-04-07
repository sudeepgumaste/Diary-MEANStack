import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostDB } from 'src/app/models/post.model';

import * as moment from 'moment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:PostDB;

  @Output() deleteEvent:EventEmitter<string> = new EventEmitter();

  get formattedDate(){
    return moment(this.post.date).format('MMMM Do YYYY, h:mm:ss a');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteEvent.emit(this.post._id)
  }
}
