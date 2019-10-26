import {Component, OnInit} from '@angular/core';
import {EmailService} from './email.service';
import {EmailMessage} from '../models/EmailMessage';
import {Member} from '../models/Member';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  messages: EmailMessage[];
  members: Member[];
  userIdToUser: Map<string, Member>;

  constructor(private emailService: EmailService) {
    this.messages = [];
    this.members = [];
    this.userIdToUser = new Map<string, Member>(null);
  }

  ngOnInit() {
    this.emailService.getMembers().then(emails => {
      emails.subscribe(resp => {
        this.members = resp;
        this.members.forEach(user => {
          this.userIdToUser.set(user.id, user);
        });
      });
    });
    this.emailService.getMessages().then(messages => {
      messages.subscribe(resp => {
        this.messages = resp.sort((a: EmailMessage, b: EmailMessage) => {
          if (new Date(a.timestamp) < new Date(b.timestamp)) {
            return 1;
          }
          if (new Date(a.timestamp) > new Date(b.timestamp)) {
            return -1;
          }
          return 0;
        });
      });
    });
  }
}
