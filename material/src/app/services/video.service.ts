import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    videoList = {
        "items": [
            {
                "title": "My Advice for New Programmers (Things I Wish I Knew)",
                "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/default.jpg",
                "type": "Yes, its made for Kids"
            },
            {
                "title": "Hello Web app site using RubyMine",
                "url": "https://i.ytimg.com/vi/NphjQt2_BPA/default.jpg",
                "type": "Not for kids"
            },
            {
                "title": "My Advice for New Programmers (Things I Wish I Knew)",
                "url": "https://i.ytimg.com/vi/ByOPqVzGvJw/default.jpg",
                "type": "Yes, its made for Kids"
            }
        ]
    }
    video$: Observable<Array<any>> = new Observable(
        observer => {
            observer.next(this.videoList.items);
        }
    );
    constructor() {
    }




}