import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Photo} from '../../Models/photo.model';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos(page: number, limit: number) {
    return this.http.get<Photo[]>( `${this.apiUrl}?_page=${page}&_limit=${limit}`);
  }

  addPhoto(photo: Photo) {
    return this.http.post<Photo>(
      this.apiUrl,
      photo
    );
  }
}
