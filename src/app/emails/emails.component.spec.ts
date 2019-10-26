import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EmailsComponent} from './emails.component';
import {MatTooltipModule} from '@angular/material';

describe('EmailsComponent', () => {
  let component: EmailsComponent;
  let fixture: ComponentFixture<EmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsComponent],
      imports: [MatTooltipModule],
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
