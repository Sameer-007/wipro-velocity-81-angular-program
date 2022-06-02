import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidateString } from '../shared/reactive.validate';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  liveStreamForm = this.formBuilder.group({
    eventTitle: ['', [ValidateString]],
    eventStartDate: ['', [Validators.required]],
    eventStartTime: ['', Validators.required],
    eventDetails: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmitLiveStream() {
    alert('Submit button Clicked')
    console.log(this.liveStreamForm)
    console.log(this.liveStreamForm.value)
    console.log(this.liveStreamForm.controls['eventStartTime'].value)
    console.log(this.liveStreamForm.controls['eventDetails'].value)
    // alert(this.liveStreamForm.get('eventTitle'))
    // alert(this.liveStreamForm.get('eventStartDate'))

  }

}
