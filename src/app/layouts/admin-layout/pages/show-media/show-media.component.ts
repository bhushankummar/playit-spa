import {Component, OnInit} from '@angular/core';
import {MediaService} from '../../../../shared/services/media/media.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-show-media',
  templateUrl: './show-media.component.html',
  styleUrls: ['./show-media.component.css']
})

export class ShowMediaComponent implements OnInit {
  data;
  mediaData;
  constructor(private mediaService: MediaService, private spinner: NgxSpinnerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.data = params;
    });
    console.log(this.data);
    this.mediaService.showMedia(this.data).subscribe(
      response => {
        this.mediaData = response['data'];
        this.spinner.hide();
      },
      error => {
        console.error(error);
      }
    );
  }

}
