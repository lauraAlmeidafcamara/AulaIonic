import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodosService } from '../service/service';
@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: any;
  frase: string = "";
  userId: number;
  id: number;
  constructor(public navCtrl: NavController, public TodosService: TodosService) { }


  async ionViewDidLoad() {
    await this.getAll();
  }

  async getAll(){
    await this.TodosService.get().subscribe((res) => {
      console.log(res);
      this.todo = res;
    });
  }

  async post() {
    let todo = {
      completed: true,
      id: this.id,
      userId: this.userId,
      title: this.frase
    }

    await this.TodosService.post(todo).subscribe((res) => {
      console.log(res);
    });


    await this.getAll();
  }

}
