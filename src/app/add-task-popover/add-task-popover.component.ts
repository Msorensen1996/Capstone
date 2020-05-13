import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-task-popover',
  templateUrl: './add-task-popover.component.html',
  styleUrls: ['./add-task-popover.component.scss'],
})
export class AddTaskPopoverComponent implements OnInit {

  priority: string;
  title: string;
  desc: string;
  by: Date;
  taskOwner: string;
  

  constructor(private popoverController: PopoverController,
    private toastCtrl: ToastController, ) { 
    this.taskOwner = firebase.auth().currentUser.uid;
  }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss();
  }
  addtask(){
    firebase.firestore().collection("tasks").add({
      prio: this.priority,
      title: this.title,
      description: this.desc,
      Due: this.by,
      owner: this.taskOwner,
      status: "incomplete",
      all: "all",
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef) => {
      this.toastCtrl.create({
        message: "Task has been submited",
        duration: 2000
      }).then((toast) =>{
        toast.present();
        
      })
  }).catch((err) => {
    this.toastCtrl.create({
      message: err.message,
      duration: 2000
    }).then((toast) =>{
      toast.present();
    })
  })

  }
}
