import { Component, OnInit } from '@angular/core';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {NavController} from  '@ionic/angular';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  subject: string;
  body: string;
  to: string;
  constructor(private emailComposter: EmailComposer,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  send() {
    let email = {
      to: this.to,
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.body,
      isHTML: false,
      app: "Gmail"
    }
    this.emailComposter.open(email);
  }
  back() {
    this.navCtrl.navigateRoot("/index");
  }

}
