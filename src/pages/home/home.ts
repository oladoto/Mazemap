import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import {TodoProvider} from "../../providers/todo/todo"
import { ArchiveTodosPage } from "../archive-todos/archive-todos"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public archiveTodosPage = ArchiveTodosPage;

  constructor(private todoService: TodoProvider, public navCtrl: NavController, private alertController: AlertController, private toastController: ToastController) {
    this.todos = this.todoService.getTodos();
  }

  gotoArchivePage(){
    this.navCtrl.push(ArchiveTodosPage);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs:[
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        { 
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoService.addTodo(todoText);

            addTodoAlert.onDidDismiss(()=>{

              let addTodoToast = this.toastController.create({
                message: "Todo Added",
                duration: 2000
              });
              addTodoToast.present();
            });
          }
        }
      ]
    });
    addTodoAlert.present();
  }

}
