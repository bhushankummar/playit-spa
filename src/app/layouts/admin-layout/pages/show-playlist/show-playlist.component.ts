import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../../../../shared/services/playlist/playlist.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {
  playlist;
  constructor(private playlistService: PlaylistService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.playlistService.showPlaylist().subscribe(
      response => {
        this.playlist = response;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        console.error(error);
      }
    );
  }

}
