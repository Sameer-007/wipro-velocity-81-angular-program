 import {
     fromEvent
 } from 'rxjs';
 const button = document.getElementById('b1')

 fromEvent(button, 'click').subscribe(() => {
     alert('Using RxJS')
 })