import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KeepNote } from '../model/keepnote';
import { KeepNoteService } from '../services/keepnote.service';

@Component({
  selector: 'app-keepnote',
  templateUrl: './keepnote.component.html',
  styleUrls: ['./keepnote.component.css']
})
export class KeepnoteComponent implements OnInit {

  keepNoteForm: any;
  KeepNoteList: KeepNote[] = []
  // Inject FormBuilder object inside the constructor  - DI
  // Inject KeepNoteService object
  constructor(private formBuilder: FormBuilder,
    private service: KeepNoteService) { }

  ngOnInit(): void {
    alert("ngOnInit Called")
    this.keepNoteForm = this.formBuilder.group({
      'title': ['Title'],
      'description': ['Take a Note']
    })
    this.service.getAllNotes().subscribe(list => {
      this.KeepNoteList = list
      console.log("-------")
      console.log(this.KeepNoteList)
      console.log("-------")
    })
  }
  postNotes() {
    console.log(this.keepNoteForm.value)
    alert(this.keepNoteForm.value.title)
    alert(this.keepNoteForm.value.description)
    this.service.postNotes(this.keepNoteForm.value)
      .subscribe(data => {
        alert('Data Inserted')
        console.log('Data Inserted' + data)
      })
    this.ngOnInit()
  }

}
