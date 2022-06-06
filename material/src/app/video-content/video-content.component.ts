import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../model/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit {
  updatedVideoList: any = []
  // http://localhost:4200/video-content/101
  constructor(private service: VideoService,
    private activateRoute: ActivatedRoute,
    private route: Router) { }
  videoId = 0;
  ngOnInit(): void {
    this.videoId = this.activateRoute.snapshot.params['id']
    alert(this.videoId)
    if (this.videoId == undefined) {
      this.service.video$.subscribe(data => {
        console.log("-------")
        console.log(data)
        this.updatedVideoList = data
        console.log("-------")
      })
    }
    else {
      this.service.video$.subscribe(data => {
        this.updatedVideoList = data.filter(x => {
          return x.id == this.videoId
        })
      })
    }
  }

  getData(val: string) {
    this.route.navigateByUrl(`/video-content/${val}`)
  }

}
