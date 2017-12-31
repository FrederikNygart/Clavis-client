import { LockService } from './services/lock.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LockGroupService } from './services/lock-group.service';
import { LockOwnerService } from './services/lock-owner.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    LockGroupService,
    LockOwnerService,
    LockService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
