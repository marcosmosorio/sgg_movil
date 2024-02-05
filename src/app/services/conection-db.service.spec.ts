import { TestBed } from '@angular/core/testing';

import { ConectionDBService } from './conection-db.service';

describe('ConectionDBService', () => {
  let service: ConectionDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
