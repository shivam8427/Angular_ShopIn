import { TestBed } from '@angular/core/testing';

import { ReadCategoryService } from './read-category.service';

describe('ReadCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadCategoryService = TestBed.get(ReadCategoryService);
    expect(service).toBeTruthy();
  });
});
