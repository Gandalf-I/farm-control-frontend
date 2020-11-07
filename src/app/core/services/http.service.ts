import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environment/environment';
import { HttpRequestsEnum } from '@shared/enums/http-requests.enum';

@Injectable()
export class HttpService {
  private url: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  post<T>(url: HttpRequestsEnum, body, headers: any = null, params: any = null): Observable<T> {
    headers = new HttpHeaders(this.formatHeaders(headers));

    return this.http.post<T>(this.url + url, body, {
      headers,
      params,
      withCredentials: false,
    });
  }

  patch<T>(url: HttpRequestsEnum, body, headers: any = null, params: any = null): Observable<T> {
    headers = new HttpHeaders(this.formatHeaders(headers));

    return this.http.patch<T>(this.url + url, body, {
      headers,
      params,
      withCredentials: false,
    });
  }

  get<T>(url: HttpRequestsEnum, headers: any = null, params: any = {}): Observable<T> {
    headers = new HttpHeaders(this.formatHeaders(headers));

    return this.http.get<T>(this.url + url, {
      headers,
      params,
      withCredentials: false,
    });
  }

  delete<T>(url: HttpRequestsEnum, headers: any = null, params: any = null): Observable<T> {
    headers = new HttpHeaders(this.formatHeaders(headers));

    return this.http.delete<T>(this.url + url, {
      headers,
      withCredentials: false,
      params,
    });
  }

  private parseParams(body) {
    const httpParams = new HttpParams();

    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        const element = body[key];
        if (element) {
          httpParams.set(key, element);
        }
      }
    }

    return httpParams;
  }

  private formatHeaders(headers) {
    if (!headers) {
      return;
    }

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        if (typeof headers[key] !== 'string') {
          headers[key] = headers[key] + '';
        }
      }
    }

    return headers;
  }
}
