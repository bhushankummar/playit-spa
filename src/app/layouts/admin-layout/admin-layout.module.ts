import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';
import {AddPlaylistComponent} from './pages/add-playlist/add-playlist.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ShowMediaComponent} from './pages/show-media/show-media.component';
import {ShowPlaylistComponent} from './pages/show-playlist/show-playlist.component';
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
    ShowPlaylistComponent,
    ShowMediaComponent
  ]
})

export class AdminLayoutModule {}
