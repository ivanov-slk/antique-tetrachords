import { TestBed } from '@angular/core/testing';

import { TranslateSyncService } from './translate-sync.service';

describe('TranslateSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateSyncService = TestBed.get(TranslateSyncService);
    expect(service).toBeTruthy();
  });
});
