import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {PlaylistService} from '../../../../shared/services/playlist/playlist.service';
@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {
  addPlaylist: FormGroup;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private playlist: PlaylistService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) {}

  ngOnInit(): void {
    this.addPlaylist = this.formBuilder.group({
      email: ['', Validators.email],
      playlistUrl: [''],
      type: [null, Validators.required],
      driveFolderId: ['']
    });
  }
  addPlaylistDetails() {
    this.spinner.show();
    this.data = {
      // email: this.addPlaylist.controls.email.value,
      type: this.addPlaylist.controls.type.value,
      playlistUrl: this.addPlaylist.controls.playlistUrl.value,
      driveFolderId: this.addPlaylist.controls.driveFolderId.value
    };
    this.playlist.addPlaylist(this.data)
      .subscribe(
        response => {
          console.log(response);
          this.spinner.hide();
          this.router.navigate(['/show-video-playlist']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
