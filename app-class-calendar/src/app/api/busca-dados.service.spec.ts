import { TestBed } from '@angular/core/testing';

import { BuscaDadosService } from './busca-dados.service';

describe('BuscaDadosService', () => {
  let service: BuscaDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
