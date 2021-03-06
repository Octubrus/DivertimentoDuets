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
import { MatTabsModule, MatExpansionModule, MatToolbarModule,
  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { DownloadMaterialsComponentV1 } from './download-materials/volume1/download-v1.component';
import { DownloadMaterialsComponentS1 } from './download-materials/scale1/download-s1.component';
import { AboutComponent } from './about/about.component';
import { MethodComponent } from './method/method.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { Volume1Component } from './books/volume1/volume1.component';
import { Volume2Component } from './books/volume2/volume2.component';
import { LocationResolverService } from './location-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloadMaterialsComponentV2 } from './download-materials/volume2/download-v2.component';
import { DownloadMaterialsComponentS2 } from './download-materials/scale2/download-s2.component';
import { PolicyComponent } from './policy/policy.component';
import { Scale1Component } from './books/scale1/scale1.component';
import { Scale2Component } from './books/scale2/scale2.component';
import { DownloadMaterialsSimpleLesson } from './download-materials/simpleLesson/simpleLesson.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: { data: LocationResolverService } },
  { path: 'books', component: BooksComponent, resolve: { data: LocationResolverService } },
  { path: 'method', component: MethodComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeComponent,
    DownloadMaterialsComponentV1,
    DownloadMaterialsComponentV2,
    DownloadMaterialsComponentS1,
    DownloadMaterialsComponentS2,
    DownloadMaterialsSimpleLesson,
    AboutComponent,
    MethodComponent,
    ContactComponent,
    BooksComponent,
    Volume1Component,
    Volume2Component,
    PolicyComponent,
    Scale1Component,
    Scale2Component
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
    DownloadMaterialsComponentV1,
    DownloadMaterialsComponentV2,
    DownloadMaterialsComponentS1,
    DownloadMaterialsComponentS2,
    DownloadMaterialsSimpleLesson
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
