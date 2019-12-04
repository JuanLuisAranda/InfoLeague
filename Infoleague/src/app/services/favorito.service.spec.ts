import { TestBed } from '@angular/core/testing';

import { FavoritoService } from './favorito.service';

describe('FavoritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritoService = TestBed.get(FavoritoService);
    expect(service).toBeTruthy();
  });
});
