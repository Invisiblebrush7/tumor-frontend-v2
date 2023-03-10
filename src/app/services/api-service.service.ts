import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl: string =
    'https://tumorclassification-yfr2gcdqwa-ew.a.run.app/';

  constructor(private httpClient: HttpClient) {}

  postImage(image: File) {
    return this.httpClient.post(this.apiUrl, { img: image });
  }
}
