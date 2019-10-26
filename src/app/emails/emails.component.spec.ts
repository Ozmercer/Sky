import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EmailsComponent} from './emails.component';
import {MatTooltipModule} from '@angular/material';
import {EmailService} from './email.service';
import {Observable} from 'rxjs';

class EmailServiceStub {
  getMembers() {
    return Promise.resolve(new Observable());
  }
  getMessages() {
    return Promise.resolve(new Observable());
  }
}

describe('EmailsComponent', () => {
  let component: EmailsComponent;
  let fixture: ComponentFixture<EmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsComponent],
      imports: [MatTooltipModule],
      providers: [{provide: EmailService, useClass: EmailServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
