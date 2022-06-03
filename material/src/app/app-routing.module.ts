import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  { path: 'video-content', component: VideoContentComponent },
  { path: 'video-content/:id', component: VideoContentComponent },
  { path: 'studio-upload', component: StudioUploadComponent },
  { path: 'stdio-live', component: StudioLivestreamComponent },
  { path: '', redirectTo: "/", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
