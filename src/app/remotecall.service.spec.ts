import { TestBed } from '@angular/core/testing';

import { RemotecallService } from './remotecall.service';

describe('RemotecallService', () => {
  let service: RemotecallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotecallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
