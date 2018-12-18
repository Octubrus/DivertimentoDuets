import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule, MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { DownloadMaterialsComponent } from './download-materials/download-materials.component';
import { AboutComponent } from './about/about.component';
import { MethodComponent } from './method/method.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { Volume1Component } from './books/volume1/volume1.component';
import { Volume2Component } from './books/volume2/volume2.component';
import { LocationResolverService } from './location-resolver.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent, resolve: { data: LocationResolverService } },
  { path: 'method', component: MethodComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeComponent,
    DownloadMaterialsComponent,
    AboutComponent,
    MethodComponent,
    ContactComponent,
    BooksComponent,
    Volume1Component,
    Volume2Component
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  entryComponents: [
    DownloadMaterialsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
