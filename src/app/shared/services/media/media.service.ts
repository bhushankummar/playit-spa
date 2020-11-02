import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) {}

  showMedia(data) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer 88/pSU+vG0tQULvN0ShyMSjeBzsyVGRxGhafoPx55Zs=`
    });
    console.log(data);
    return this.http.post(environment.apiUrl + '/api/v1/media-item', data, {headers: headers});
  }
}
