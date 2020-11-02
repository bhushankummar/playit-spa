import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';
import {AddPlaylistComponent} from './pages/add-playlist/add-playlist.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ShowAudioPlaylistComponent} from './pages/show-audio-playlist/show-audio-playlist.component';
import {ShowVideoPlaylistComponent} from './pages/show-video-playlist/show-video-playlist.component';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    AddPlaylistComponent,
    DashboardComponent,
    ShowAudioPlaylistComponent,
    ShowVideoPlaylistComponent
  ]
})

export class AdminLayoutModule {}
