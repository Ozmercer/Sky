import {TestBed} from '@angular/core/testing';

import {EmailService} from './email.service';
import {HttpClient} from '@angular/common/http';

class HttpStub {
  get() {
  }
}

describe('EmailService', () => {
  let service: EmailService;
  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{provide: HttpClient, useClass: HttpStub}]
      });
      service = TestBed.get(EmailService);
    }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
