import { TestBed } from '@angular/core/testing';

import { CanActivateTeam } from './can-activate-team.service';

describe('CanActivateTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateTeam = TestBed.get(CanActivateTeam);
    expect(service).toBeTruthy();
  });
});
