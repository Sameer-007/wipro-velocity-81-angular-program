import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { KeepNote } from "../model/keepnote";

@Injectable({
    providedIn: 'root'
})
export class KeepNoteService {
    // Communicate with BackEnd Sever -  HttpClient
    // Add HttpCilentModules in app.module.ts
    // Inject HttpClient object - DI
    constructor(private httpClient: HttpClient) {
    }
    url = "http://localhost:3000/notes"
    postNotes(note: KeepNote): Observable<KeepNote> {

        let body = JSON.stringify(note)
        let data = this.httpClient.post<KeepNote>(this.url, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data;
    }

    getAllNotes(): Observable<KeepNote[]> {
        return this.httpClient.get<KeepNote[]>(this.url)
    }

}