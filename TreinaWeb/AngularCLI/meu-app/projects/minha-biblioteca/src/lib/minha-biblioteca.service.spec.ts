import { TestBed } from '@angular/core/testing';

import { MinhaBibliotecaService } from './minha-biblioteca.service';

describe('MinhaBibliotecaService', () => {
  let service: MinhaBibliotecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhaBibliotecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
