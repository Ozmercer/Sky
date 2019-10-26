import { Component, OnInit } from '@angular/core';
import {EmailService} from './email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.getMembers().then(emails => {
      emails.subscribe(resp => {
        console.log(resp);
      });
    });
    this.emailService.getMessages().then(messages => {
      messages.subscribe(resp => {
        console.log(resp);
      })
    });
  }

}
