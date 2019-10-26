import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmailMessage} from '../models/EmailMessage';
import {Member} from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private randomDelayPromise(data) {
    const delay = Math.floor(Math.random() * 400) + 100;
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
  }

  getMessages(): Promise<Observable<EmailMessage[]>> {
    return this.randomDelayPromise(this.http.get('../assets/messages.json')) as Promise<Observable<EmailMessage[]>>;
  }

  getMembers(): Promise<Observable<Member[]>> {
    return this.randomDelayPromise(this.http.get('../assets/members.json')) as Promise<Observable<Member[]>>;
  }
}
