import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private randomDelayPromise(data) {
    const delay = Math.floor(Math.random() * 400) + 100;
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
  }

  getMessages(): Promise<Observable> {
    return this.randomDelayPromise(this.http.get('../assets/messages.json'));
  }

  getMembers(): Promise<Observable> {
    return this.randomDelayPromise(this.http.get('../assets/members.json'));
  }
}
