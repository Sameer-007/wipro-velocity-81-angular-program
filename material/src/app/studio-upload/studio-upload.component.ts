import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {
  video: Video;

  constructor(private service: VideoService) {
    this.video = {
      url: '',
      title: '',
      type: ''
    }
  }
  ngOnInit(): void {
  }
  submitForm(video: any) {

    this.service.videoList.items.push(video.value);


    alert('Form Submitted')
    console.log(video)
    console.log(video.value)
    console.log(this.service.videoList)

  }

}
