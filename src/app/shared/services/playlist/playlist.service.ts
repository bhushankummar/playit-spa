import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { LocalStorageService } from '../../localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  userToken:string;
  constructor(private http: HttpClient, private localstorage: LocalStorageService) {
    this.userToken = this.localstorage.get();
  }
  addPlaylist(data) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    return this.http.post(environment.apiUrl + '/api/v1/playlist', data, {headers: headers});
  }
  showPlaylist(id?) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    });
    return this.http.post(environment.apiUrl + '/api/v1/playlist/search', {}, {headers: headers});
  }
}
