import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { AngularFirestoreCollectionGroup } from '@angular/fire/firestore/public_api';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  allet: any;
  error: any;
  email: string;
  password: string;
  constructor(private router: Router,private alert: AlertController, private dataAuth: AngularFireAuth) { }

  ngOnInit() {
  }
 async signup() {


    const {email,password} = this

 try{
    
     const res = await this.dataAuth.createUserWithEmailAndPassword(email, password)
     this.AllertAll("Register Succefull","User has been Registerd")
     this.router.navigate(['home'])
     console.log("Responce",res)
     }catch(error)
    {
      this.AllertAll("Error!",error.message);
      console.dir("error",error.message)
    }
  } 
  async AllertAll(header:string, message:string){
    this.allet = await this.alert.create({
      header:header,
      message:message,
      buttons: ['ok']
    })
     await this.allet.present()
  }
}
