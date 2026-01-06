import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhoto } from './add-photo';

describe('AddPhoto', () => {
  let component: AddPhoto;
  let fixture: ComponentFixture<AddPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
