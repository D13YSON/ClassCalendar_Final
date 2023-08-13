import { TestBed } from '@angular/core/testing';

import { AtulizarService } from './atulizar.service';

describe('AtulizarService', () => {
  let service: AtulizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtulizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
