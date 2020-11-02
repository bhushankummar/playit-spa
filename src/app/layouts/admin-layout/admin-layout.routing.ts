import {Routes} from '@angular/router';
import {AddPlaylistComponent} from './pages/add-playlist/add-playlist.component';
import {ShowVideoPlaylistComponent} from './pages/show-video-playlist/show-video-playlist.component';
import {ShowAudioPlaylistComponent} from './pages/show-audio-playlist/show-audio-playlist.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard as AuthGuard} from '../../shared/auth.guard';

export const AdminLayoutRoutes: Routes = [
  // {path: 'add-video-playlist', canActivate: [AuthGuard], component: AddVideoPlaylistComponent}
  {path: 'add-playlist', component: AddPlaylistComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'show-video-playlist', component: ShowVideoPlaylistComponent},
  {path: 'show-audio-playlist', component: ShowAudioPlaylistComponent}
];
