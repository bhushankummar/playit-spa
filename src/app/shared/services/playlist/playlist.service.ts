import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient) {  }
  addPlaylist(data) {
    return this.http.post(environment.apiUrl + '/api/v1/playlist', data);
  }
  showPlaylist(id?) {
    return this.http.post(environment.apiUrl + '/api/v1/playlist/search', {});
  }
  removePlaylist(id) {
    return this.http.delete(environment.apiUrl + `/api/v1/playlist/${id}`);
  }
}
