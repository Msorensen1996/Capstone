import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddTaskPopoverComponent } from '../add-task-popover/add-task-popover.component';
import * as firebase from "firebase";
import {ToastController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  userId: string;
  tasks: any[] = [];
  constructor(public popoverController: PopoverController,
     private toastCtrl: ToastController,
     private NavCtrl: NavController) { 
    this.userId = firebase.auth().currentUser.uid;
    this.getTask();
  }

  ngOnInit() {
  }

  async addTask(event) {
    const popover = await this.popoverController.create({
      component: AddTaskPopoverComponent,
      event
    });
    return await popover.present();
  }

  email() {
    this.NavCtrl.navigateRoot("/inbox");
  }
 

  getTask() {
    firebase.firestore().collection("tasks")
    .where("all","==", "all")
    .where("status", "==", "incomplete")
    .onSnapshot((querySnapshot) =>{
      this.tasks = querySnapshot.docs;
    });
  }

  done(document: firebase.firestore.QueryDocumentSnapshot) {
    firebase.firestore().collection("tasks").doc(document.id).set({
      "status": "completed"
    }, {
      merge: true
    }).then(() => {
      this.toastCtrl.create({
        message: "Compleated",
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.NavCtrl.navigateRoot("/home");
    }).catch((err) => {
      console.log(err)
    })
  }

}
