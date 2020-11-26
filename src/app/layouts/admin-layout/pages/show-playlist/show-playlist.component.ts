import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../../shared/services/playlist/playlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from '../../../../shared/toast/toast.service';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: [ './show-playlist.component.css' ]
})
export class ShowPlaylistComponent implements OnInit {
  playlist;
  constructor(private playlistService: PlaylistService, private spinner: NgxSpinnerService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.playlistService.showPlaylist().subscribe(
      response => {
        this.playlist = response;
        this.spinner.hide();
        this.toastService.success('', 'Playlist fatched');

      },
      error => {
        this.spinner.hide();
        this.toastService.error('', error.error.error);
        console.error(error);
      }
    );
  }
  deletePlaylist(id) {
    this.spinner.show();
    this.playlistService.removePlaylist(id).subscribe(
      response => {
        console.log(response);
        // this.playlist = response;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.toastService.error('', error.error.error);
        console.error(error);
      }
    );
  }

}
