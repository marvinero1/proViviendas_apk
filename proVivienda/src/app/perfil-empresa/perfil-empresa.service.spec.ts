import { TestBed } from '@angular/core/testing';

import { PerfilEmpresaService } from './perfil-empresa.service';

describe('PerfilEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilEmpresaService = TestBed.get(PerfilEmpresaService);
    expect(service).toBeTruthy();
  });
});
