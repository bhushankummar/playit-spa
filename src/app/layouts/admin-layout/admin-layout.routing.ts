import {Routes} from '@angular/router';
import {AddPlaylistComponent} from './pages/add-playlist/add-playlist.component';
import {ShowPlaylistComponent} from './pages/show-playlist/show-playlist.component';
import {ShowMediaComponent} from './pages/show-media/show-media.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard as AuthGuard} from '../../shared/auth.guard';

export const AdminLayoutRoutes: Routes = [
  // {path: 'add-video-playlist', canActivate: [AuthGuard], component: AddVideoPlaylistComponent}
  {path: 'add-playlist', canActivate: [AuthGuard], component: AddPlaylistComponent},
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'show-playlist', canActivate: [AuthGuard], component: ShowPlaylistComponent},
  {path: 'show-media', canActivate: [AuthGuard], component: ShowMediaComponent}
];
