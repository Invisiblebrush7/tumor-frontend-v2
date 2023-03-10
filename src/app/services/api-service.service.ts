import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl: string = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  postImage(image: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('img', image);

    const req = new HttpRequest('POST', `${this.apiUrl}/test`, formData, {
      responseType: 'json',
    });

    return this.httpClient.request(req);
  }
}
