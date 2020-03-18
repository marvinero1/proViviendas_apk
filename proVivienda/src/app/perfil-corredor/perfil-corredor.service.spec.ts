import { TestBed } from '@angular/core/testing';

import { PerfilCorredorService } from './perfil-corredor.service';

describe('PerfilCorredorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilCorredorService = TestBed.get(PerfilCorredorService);
    expect(service).toBeTruthy();
  });
});
