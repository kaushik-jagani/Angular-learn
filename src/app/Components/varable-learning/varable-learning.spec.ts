import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarableLearning } from './varable-learning';

describe('VarableLearning', () => {
  let component: VarableLearning;
  let fixture: ComponentFixture<VarableLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarableLearning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarableLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
