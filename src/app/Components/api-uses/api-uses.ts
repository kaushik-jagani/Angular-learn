import {Component, inject, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {PhotoService} from '../../Services/Photo/photo.service';
import {Photo} from '../../Models/photo.model';
import {AddPhoto} from '../add-photo/add-photo';
import {AddPhotoReactive} from '../add-photo-reactive/add-photo-reactive';

@Component({
  selector: 'app-api-uses',
  imports: [FormsModule,NgOptimizedImage,AddPhoto,AddPhotoReactive],
  templateUrl: './api-uses.html',
  styleUrl: './api-uses.scss',
})
export class ApiUses implements OnInit {
  photos = signal<Photo[]>([]);
  loading = signal(true);

  // pagination state
  currentPage = signal(1);
  pageSize = 16;

  //new way to inject service after angular 16
  private photoService= inject(PhotoService);

  //old way to inject service using construcotr
  // constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService.getPhotos(this.currentPage(), this.pageSize).subscribe({
      next: (data) => {
        this.photos.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  nextPage() {
    this.currentPage.update(p => p + 1);
    this.loadPhotos();
  }

  prevPage() {
    if (this.currentPage() === 1) return;

    this.currentPage.update(p => p - 1);
    this.loadPhotos();
  }


  //Popup for forms saving
  showAddPopup = signal(false);

  openPopup() {
    this.showAddPopup.set(true);
  }

  closePopup() {
    this.showAddPopup.set(false);
  }

  //Reactive Popup for forms saving
  showAddPopupReactive = signal(false);

  openReactivePopup() {
    this.showAddPopupReactive.set(true);
  }

  closeReactivePopup() {
    this.showAddPopupReactive.set(false);
  }
}
