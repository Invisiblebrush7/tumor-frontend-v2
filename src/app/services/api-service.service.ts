import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl: string =
    'https://tumorclassification-yfr2gcdqwa-ew.a.run.app';

  constructor(private httpClient: HttpClient) {}

  postImage(image: File): Observable<any> {
    const formData: FormData = new FormData();

    const headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    formData.append('img', image);

    const req = new HttpRequest(
      'POST',
      `${this.apiUrl}/upload_image`,
      formData,
      { headers: headers }
    );

    return this.httpClient.request(req);
  }

  testApi(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
