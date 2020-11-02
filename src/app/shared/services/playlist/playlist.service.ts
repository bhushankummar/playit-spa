import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) {}
  addPlaylist(data) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer 88/pSU+vG0tQULvN0ShyMSjeBzsyVGRxGhafoPx55Zs=`
    });
    return this.http.post(environment.apiUrl + '/api/v1/playlist', data, {headers: headers});
  }
  showPlaylist(id?) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer 88/pSU+vG0tQULvN0ShyMSjeBzsyVGRxGhafoPx55Zs=`
    });
    return this.http.post(environment.apiUrl + '/api/v1/playlist/search', {}, {headers: headers});
  }
}
