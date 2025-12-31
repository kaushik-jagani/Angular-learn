import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaleLea } from './signale-lea';

describe('SignaleLea', () => {
  let component: SignaleLea;
  let fixture: ComponentFixture<SignaleLea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaleLea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaleLea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
