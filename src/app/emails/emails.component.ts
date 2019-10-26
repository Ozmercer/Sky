import { Component, OnInit } from '@angular/core';
import {EmailService} from './email.service';
import {EmailMessage} from '../models/EmailMessage';
import {Member} from '../models/Member';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {
  messages: EmailMessage[];
  members: Member[];

  constructor(private emailService: EmailService) {
    this.messages = [];
    this.members = [];
  }

  ngOnInit() {
    this.emailService.getMembers().then(emails => {
      emails.subscribe(resp => {
        this.members = resp;
      });
    });
    this.emailService.getMessages().then(messages => {
      messages.subscribe(resp => {
        this.messages = resp;
      })
    });
  }

}
