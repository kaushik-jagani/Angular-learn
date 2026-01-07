import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoReactive } from './add-photo-reactive';

describe('AddPhotoReactive', () => {
  let component: AddPhotoReactive;
  let fixture: ComponentFixture<AddPhotoReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPhotoReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhotoReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
