import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from 'ionic-angular';

@Injectable()
export class TodosService {
    private url: string = 'http://localhost:3000/todos';
    private headers = new HttpHeaders({ 'Content-type': 'application/json' });
    private options = { headers: this.headers };
    constructor(public http: HttpClient) {}
    service() {
        return this.http.get(this.url, this.options)
    }
}  