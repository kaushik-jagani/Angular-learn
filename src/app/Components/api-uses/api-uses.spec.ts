import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUses } from './api-uses';

describe('ApiUses', () => {
  let component: ApiUses;
  let fixture: ComponentFixture<ApiUses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
