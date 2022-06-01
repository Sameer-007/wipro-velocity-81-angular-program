import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit {

  updatedVideoList: any = []

  constructor(private service: VideoService) { }

  ngOnInit(): void {
    this.service.video$.subscribe(data => {
      console.log("-------")
      console.log(data)
      this.updatedVideoList = data
      console.log("-------")
    })


  }

}
