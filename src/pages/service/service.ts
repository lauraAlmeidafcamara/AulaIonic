import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { PromiseObservable } from "rxjs/observable/PromiseObservable";
import { Title } from "@angular/platform-browser";

@Injectable()
export class TodosService {
    private url: string = 'http://localhost:3000/todos';
    private headers = new HttpHeaders({ 'Content-type': 'application/json' });
    private options = { headers: this.headers };
    
    constructor(public http: HttpClient) {
        var currentUser = JSON.parse(localStorage.getItem('frase'));
       
    }

    get() {
        return this.http.get(this.url, this.options);
    }

    post(todo){
        return this.http.post(this.url, todo, this.options);
    }

    }
