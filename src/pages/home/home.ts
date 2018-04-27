import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { NavController } from 'ionic-angular';
import{HttpClient, HttpHeaders} from '@angular/common/http'; 
import { TodosService } from '../service/service';
@Component({
 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo:any;
  constructor(public navCtrl: NavController, public TodosService: TodosService, public httpClient:HttpClient ) {}  

  ionViewDidLoad(){
   this.httpClient.get("http://localhost:3000/todos")
    .subscribe(
      (res) => { this.todo = res }, 
      (err) => { console.log(err) }
   );
 }

}
        