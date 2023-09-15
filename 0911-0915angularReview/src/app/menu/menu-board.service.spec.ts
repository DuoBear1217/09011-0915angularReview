import { TestBed } from '@angular/core/testing';

import { MenuBoardService } from './menu-board.service';

describe('MenuBoardService', () => {
  let service: MenuBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
