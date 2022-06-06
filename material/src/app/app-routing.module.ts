import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAuthGuard } from './services/login-auth-guard.guard';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children: [
      {
        path: 'admin-login', component: AdminLoginComponent
      },
      {
        path: 'vendor-login', component: VendorLoginComponent
      }
    ]
  },
  { path: 'video-content', component: VideoContentComponent, canActivate: [LoginAuthGuard] },
  { path: 'video-content/:id', component: VideoContentComponent, canActivate: [LoginAuthGuard] },
  { path: 'studio-upload', component: StudioUploadComponent, canActivate: [LoginAuthGuard] },
  { path: 'stdio-live', component: StudioLivestreamComponent, canActivate: [LoginAuthGuard] },
  { path: '', redirectTo: "/", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
