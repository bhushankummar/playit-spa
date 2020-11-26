import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AuthGuard} from './shared/auth.guard';
import { ToastComponent } from './shared/toast/toast.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpHandleInterceptor } from './shared/services/http-handle.interceptor';
// import {PagesModule} from './layouts/admin-layout/pages/pages.module';
// import { AddPlaylistComponent } from './pages/add-playlist/add-playlist.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ShowVideoPlaylistComponent } from './pages/show-video-playlist/show-video-playlist.component';
// import { ShowAudioPlaylistComponent } from './pages/show-audio-playlist/show-audio-playlist.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,
      progressBar: false
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ToastComponent,
  ],
  exports: [
    ToastComponent,
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHandleInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ToastComponent],

})
export class AppModule {}
