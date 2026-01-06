import {Component, inject, output, signal} from '@angular/core';
import {PhotoService} from '../../Services/Photo/photo.service';
import {Photo} from '../../Models/photo.model';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-photo',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-photo.html',
  styleUrl: './add-photo.scss',
})
export class AddPhoto {
  private photoService = inject(PhotoService);

  close = output<void>();

  // form state
  title = signal('');
  url = signal('');
  thumbnailUrl = signal('');
  saving = signal(false);

  save() {
    const payload: Photo = {
      albumId: 1,
      id: Date.now(), // temp id
      title: this.title(),
      url: this.url(),
      thumbnailUrl: this.thumbnailUrl()
    };

    this.saving.set(true);

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
  }

  cancel() {
    this.close.emit();
  }
}
