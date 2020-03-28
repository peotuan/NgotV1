import { TestBed, inject } from '@angular/core/testing';

import { CoreUiService } from '@nttp/core-ui/src/lib/core-ui.service';

describe('CoreUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreUiService]
    });
  });

  it('should be created', inject([CoreUiService], (service: CoreUiService) => {
    expect(service).toBeTruthy();
  }));
});
