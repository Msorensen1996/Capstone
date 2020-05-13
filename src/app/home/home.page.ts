import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email:string;
  password:string;
  user: any;
  allet: any;

  constructor(private route: Router,
     private Auth: AngularFireAuth,
      private allert: AlertController,
       private router: Router) {
         firebase.auth().onAuthStateChanged(function(user) {
           if(this.user) {
             this.router.navigate(['index'])
           }
         });
       }

  ngOnInit(){

  }
  signup(){
    this.route.navigate(['signup'])
  }
 async login(){
    const{email,password} = this

    try{

      this.user = await this.Auth.signInWithEmailAndPassword(email, password)
        this.AllertAll("Login Compleate", "User Logged In")
        this.router.navigate(['index'])

    }catch(error){
      console.dir(error);
      this.AllertAll("Error!", error.message);
      
    }
    

  }

  async AllertAll(header:string, message:string){
    
    this.allet = await this.allert.create({
      header:header,
      message:message,
      buttons: ['ok']
    })
     await this.allet.present()
  }
}
