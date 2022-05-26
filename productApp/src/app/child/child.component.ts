import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item = ''
  @Output() msgFromChild = new EventEmitter<string>()
  passDataToParent(msg: string) {
    this.msgFromChild.emit(msg)
  }
  constructor() { }
  ngOnInit(): void {
  }
}
