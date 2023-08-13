import { TestBed } from '@angular/core/testing';

import { DeletarService } from './deletar.service';

describe('DeletarService', () => {
  let service: DeletarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
