import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { CookieComponent } from './cookie/cookie.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SocialComponent,
    AboutComponent,
    HeaderComponent,
    ProjectComponent,
    CookieComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, TranslocoRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
