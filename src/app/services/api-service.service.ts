import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  // private apiUrl: string = 'http://localhost:4200/api';
  private apiUrl: string =
    'https://tumorclassification-yfr2gcdqwa-ew.a.run.app/';

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
    console.log('URL: ' + `${this.apiUrl}/upload_image`);

    return this.httpClient.request(req);
  }
  // {'User-Agent': 'python-requests/2.27.1', 'Accept-Encoding': 'gzip, deflate, br', 'Accept': '*/*', 'Connection': 'keep-alive'}
  testApi(): Observable<any> {
    const headers = new HttpHeaders({
      'User-Agent': 'python-requests/2.27.1',
      'Accept-Encoding': 'gzip, deflate, br',
      Accept: '*/*',
      Connection: 'keep-alive',
    });
    return this.httpClient.get(this.apiUrl);
  }
}
