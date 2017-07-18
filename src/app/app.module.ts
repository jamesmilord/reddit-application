import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';
import { RedditFavoriteComponent } from './reddit-favorite/reddit-favorite.component';
import { RedditService } from './reddit.service';


const appRoutes: Routes = [
{path: '', component: RedditFeedComponent},
{path: 'favorite', component: RedditFavoriteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent,
    RedditFavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
