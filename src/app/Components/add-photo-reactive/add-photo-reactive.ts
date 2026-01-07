import {Component, inject, output, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PhotoService} from '../../Services/Photo/photo.service';
import {Photo} from '../../Models/photo.model';

@Component({
  selector: 'app-add-photo-reactive',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-photo-reactive.html',
  styleUrl: './add-photo-reactive.scss',
})
export class AddPhotoReactive {
//Note: Key things to notice (IMPORTANT)
//
// FormGroup → whole form
//
// FormControl → individual input
//
// Validators are defined in TypeScript, not HTML
//
// Angular manages value + validity
  photoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    url: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]),
    thumbnailUrl: new FormControl('', Validators.required)
  });

  private photoService = inject(PhotoService);
  saving = signal(false);
  close = output<void>();

  submit() { debugger;
    if (this.photoForm.invalid) {
      this.photoForm.markAllAsTouched();
      return;
    }

    const payload: Photo = {
      albumId: 1,
      id: Date.now(), // temp id (backend usually creates this)
      title: this.photoForm.value.title!,
      url: this.photoForm.value.url!,
      thumbnailUrl: this.photoForm.value.thumbnailUrl!
    };

    this.photoService.addPhoto(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.close.emit();
        alert('Photo saved (mock)');
      },
      error: () => {
        this.saving.set(false);
      }
    });
    console.log('Form Value:', this.photoForm.value);
  }
}
